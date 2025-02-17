import {
  BasicListType,
  CompositeListType,
  CompositeValue,
  ContainerType,
  isCompositeType,
  isTreeBacked,
  ITreeBacked,
  List,
  readonlyValues,
  TreeBacked,
} from "@chainsafe/ssz";
import {allForks, ParticipationFlags} from "@chainsafe/lodestar-types";
import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {Tree} from "@chainsafe/persistent-merkle-tree";
import {MutableVector} from "@chainsafe/persistent-ts";
import {createValidatorFlat} from "./flat";
import {createEpochContext, EpochContext, EpochContextOpts} from "./epochContext";
import {CachedValidatorList, CachedValidatorListProxyHandler} from "./cachedValidatorList";
import {CachedBalanceList, CachedBalanceListProxyHandler} from "./cachedBalanceList";
import {
  CachedEpochParticipation,
  CachedEpochParticipationProxyHandler,
  IParticipationStatus,
} from "./cachedEpochParticipation";

/**
 * `BeaconState` with various caches
 *
 * Currently contains the following:
 * - The full list of network params, ssz types, and fork schedule
 * - The ssz type for the state
 * - The full merkle tree representation of the state
 * - A cache of shufflings, committees, proposers, expanded pubkeys
 * - A flat copy of validators (for fast access/iteration)
 */
export type CachedBeaconState<T extends allForks.BeaconState> =
  // Wrapper object ({validators, clone()})
  BeaconStateContext<T> &
    // Epoch Cache
    EpochContext &
    // SSZ ops
    ITreeBacked<T> &
    // Beacon State interface
    T;

export function createCachedBeaconState<T extends allForks.BeaconState>(
  config: IBeaconConfig,
  state: TreeBacked<T>,
  opts?: EpochContextOpts
): CachedBeaconState<T> {
  const cachedValidators = MutableVector.from(
    Array.from(readonlyValues(state.validators), (v) => createValidatorFlat(v))
  );
  const cachedBalances = MutableVector.from(readonlyValues(state.balances));
  const cachedPreviousParticipation = MutableVector.from(
    Array.from({length: cachedValidators.length}, () => ({timelyHead: false, timelySource: false, timelyTarget: false}))
  );
  const cachedCurrentParticipation = MutableVector.from(
    Array.from({length: cachedValidators.length}, () => ({timelyHead: false, timelySource: false, timelyTarget: false}))
  );
  const epochCtx = createEpochContext(config, state, cachedValidators, opts);
  return new Proxy(
    new BeaconStateContext(
      state.type as ContainerType<T>,
      state.tree,
      cachedValidators,
      cachedBalances,
      cachedPreviousParticipation,
      cachedCurrentParticipation,
      epochCtx
    ),
    (CachedBeaconStateProxyHandler as unknown) as ProxyHandler<BeaconStateContext<T>>
  ) as CachedBeaconState<T>;
}

export class BeaconStateContext<T extends allForks.BeaconState> {
  config: IBeaconConfig;
  // epoch cache
  epochCtx: EpochContext;
  // the BeaconState ssz type
  type: ContainerType<T>;
  // the original BeaconState as a Tree
  tree: Tree;
  // return a proxy to CachedValidatorList
  validators: CachedValidatorList<T["validators"][number]> & T["validators"];
  // return a proxy to CachedBalanceList
  balances: CachedBalanceList & T["balances"];
  previousEpochParticipation: CachedEpochParticipation & List<ParticipationFlags>;
  currentEpochParticipation: CachedEpochParticipation & List<ParticipationFlags>;

  constructor(
    type: ContainerType<T>,
    tree: Tree,
    validatorCache: MutableVector<T["validators"][number]>,
    balanceCache: MutableVector<T["balances"][number]>,
    previousEpochParticipationCache: MutableVector<IParticipationStatus>,
    currentEpochParticipationCache: MutableVector<IParticipationStatus>,
    epochCtx: EpochContext
  ) {
    this.config = epochCtx.config;
    this.type = type;
    this.tree = tree;
    this.epochCtx = epochCtx;
    this.validators = (new Proxy(
      new CachedValidatorList(
        this.type.fields["validators"] as CompositeListType<List<T["validators"][number]>>,
        this.type.tree_getProperty(this.tree, "validators") as Tree,
        validatorCache
      ),
      CachedValidatorListProxyHandler
    ) as unknown) as CachedValidatorList<T["validators"][number]> & T["validators"];
    this.balances = (new Proxy(
      new CachedBalanceList(
        this.type.fields["balances"] as BasicListType<List<T["balances"][number]>>,
        this.type.tree_getProperty(this.tree, "balances") as Tree,
        balanceCache
      ),
      CachedBalanceListProxyHandler
    ) as unknown) as CachedBalanceList & T["balances"];
    this.previousEpochParticipation = (new Proxy(
      new CachedEpochParticipation({
        type: this.type.fields["previousEpochParticipation"] as BasicListType<List<ParticipationFlags>>,
        tree: this.type.tree_getProperty(this.tree, "previousEpochParticipation") as Tree,
        persistent: previousEpochParticipationCache,
      }),
      CachedEpochParticipationProxyHandler
    ) as unknown) as CachedEpochParticipation & List<ParticipationFlags>;
    this.currentEpochParticipation = (new Proxy(
      new CachedEpochParticipation({
        type: this.type.fields["currentEpochParticipation"] as BasicListType<List<ParticipationFlags>>,
        tree: this.type.tree_getProperty(this.tree, "currentEpochParticipation") as Tree,
        persistent: currentEpochParticipationCache,
      }),
      CachedEpochParticipationProxyHandler
    ) as unknown) as CachedEpochParticipation & List<ParticipationFlags>;
  }

  clone(): CachedBeaconState<T> {
    return new Proxy(
      new BeaconStateContext(
        this.type,
        this.tree.clone(),
        this.validators.persistent.clone(),
        this.balances.persistent.clone(),
        this.previousEpochParticipation.persistent.clone(),
        this.currentEpochParticipation.persistent.clone(),
        this.epochCtx.copy()
      ),
      (CachedBeaconStateProxyHandler as unknown) as ProxyHandler<BeaconStateContext<T>>
    ) as CachedBeaconState<T>;
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const CachedBeaconStateProxyHandler: ProxyHandler<CachedBeaconState<allForks.BeaconState>> = {
  get(target: CachedBeaconState<allForks.BeaconState>, key: string): unknown {
    if (key === "validators") {
      return target.validators;
    } else if (key === "balances") {
      return target.balances;
    } else if (key === "previousEpochParticipation") {
      return target.previousEpochParticipation;
    } else if (key === "currentEpochParticipation") {
      return target.currentEpochParticipation;
    } else if (target.type.fields[key]) {
      const propType = target.type.fields[key];
      const propValue = target.type.tree_getProperty(target.tree, key);
      if (!isCompositeType(propType)) {
        return propValue;
      } else {
        return propType.createTreeBacked(propValue as Tree);
      }
    } else if (key in target.epochCtx) {
      return target.epochCtx[key as keyof EpochContext];
    } else if (key in target) {
      return target[key as keyof CachedBeaconState<allForks.BeaconState>];
    } else {
      const treeBacked = target.type.createTreeBacked(target.tree);
      if (key in treeBacked) {
        return treeBacked[key as keyof TreeBacked<allForks.BeaconState>];
      }
    }
    return undefined;
  },
  set(target: CachedBeaconState<allForks.BeaconState>, key: string, value: unknown): boolean {
    if (key === "validators") {
      throw new Error("Cannot set validators");
    } else if (key === "balances") {
      throw new Error("Cannot set balances");
    } else if (key === "previousEpochParticipation") {
      throw new Error("Cannot set previousEpochParticipation");
    } else if (key === "currentEpochParticipation") {
      throw new Error("Cannot set currentEpochParticipation");
    } else if (target.type.fields[key]) {
      const propType = target.type.fields[key];
      if (!isCompositeType(propType)) {
        return target.type.tree_setProperty(target.tree, key, value);
      } else {
        if (isTreeBacked(value)) {
          return target.type.tree_setProperty(target.tree, key, value.tree);
        } else {
          return target.type.tree_setProperty(
            target.tree,
            key,
            propType.struct_convertToTree((value as unknown) as CompositeValue)
          );
        }
      }
    }
    return false;
  },
};
