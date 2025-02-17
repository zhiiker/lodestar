import {ValidatorIndex} from "@chainsafe/lodestar-types";
import {ApiController} from "../../types";

export const getAttesterDuties: ApiController<null, {epoch: number}, ValidatorIndex[]> = {
  url: "/duties/attester/:epoch",
  method: "POST",
  id: "getAttesterDuties",

  handler: async function (req) {
    const value = await this.api.validator.getAttesterDuties(req.params.epoch, req.body);
    return this.config.types.phase0.AttesterDutiesApi.toJson(value, {case: "snake"});
  },

  schema: {
    params: {
      type: "object",
      required: ["epoch"],
      properties: {
        epoch: {
          type: "number",
          minimum: 0,
        },
      },
    },
    body: {
      type: "array",
      minItems: 1,
      items: {
        type: "number",
        minimum: 0,
      },
    },
  },
};
