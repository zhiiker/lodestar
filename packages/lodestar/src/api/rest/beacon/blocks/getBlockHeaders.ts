import {Root, Slot} from "@chainsafe/lodestar-types";
import {ApiController} from "../../types";

/* eslint-disable @typescript-eslint/naming-convention */

export const getBlockHeaders: ApiController<{slot?: string | number; parent_root?: string}> = {
  url: "/headers",
  method: "GET",
  id: "getBlockHeaders",

  handler: async function (req) {
    let slot: Slot | undefined;
    if (req.query.slot || req.query.slot === 0) {
      slot = this.config.types.Slot.fromJson(req.query.slot);
    }
    let parentRoot: Root | undefined;
    if (req.query.parent_root) {
      parentRoot = this.config.types.Root.fromJson(req.query.parent_root);
    }
    const data = await this.api.beacon.blocks.getBlockHeaders({slot, parentRoot});
    return {
      data: data.map((item) => this.config.types.phase0.SignedBeaconHeaderResponse.toJson(item, {case: "snake"})),
    };
  },

  schema: {
    querystring: {
      type: "object",
      required: [],
      properties: {
        slot: {
          type: "number",
          minimum: 0,
        },
        parent_root: {
          type: "string",
        },
      },
    },
  },
};
