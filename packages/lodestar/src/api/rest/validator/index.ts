import {getAttesterDuties} from "./duties/getAttesterDuties";
import {getProposerDuties} from "./duties/getProposerDuties";
import {getAggregatedAttestation} from "./getAggregatedAttestation";
import {prepareBeaconCommitteeSubnet} from "./prepareBeaconCommitteeSubnet";
import {produceAttestationData} from "./produceAttestationData";
import {produceBlock} from "./produceBlock";
import {publishAggregateAndProof} from "./publishAggregateAndProof";

export const validatorRoutes = [
  getAttesterDuties,
  getProposerDuties,
  getAggregatedAttestation,
  prepareBeaconCommitteeSubnet,
  produceAttestationData,
  produceBlock,
  publishAggregateAndProof,
];
