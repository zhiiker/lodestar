import fs from "fs";
import {ICliCommand} from "../../../../../util";
import {IGlobalArgs} from "../../../../../options";
import {IAccountValidatorArgs} from "../options";
import {ISlashingProtectionArgs} from "./options";
import {getGenesisValidatorsRoot, getSlashingProtection} from "./utils";
import {IInterchangeCompleteV4} from "@chainsafe/lodestar-validator/lib/slashingProtection/interchange/formats/completeV4";

/* eslint-disable no-console */

interface IImportArgs {
  file: string;
}

export const importCmd: ICliCommand<IImportArgs, ISlashingProtectionArgs & IAccountValidatorArgs & IGlobalArgs> = {
  command: "import",

  describe: "Import an interchange file.",

  examples: [
    {
      command: "account validator slashing-protection import --network pyrmont --file interchange.json",
      description: "Import an interchange file to the slashing protection DB",
    },
  ],

  options: {
    file: {
      description: "The slashing protection interchange file to import (.json).",
      demandOption: true,
      type: "string",
    },
  },

  handler: async (args) => {
    const genesisValidatorsRoot = await getGenesisValidatorsRoot(args);
    const slashingProtection = getSlashingProtection(args);

    const importFile = await fs.promises.readFile(args.file, "utf8");
    const importFileJson = JSON.parse(importFile) as IInterchangeCompleteV4;
    await slashingProtection.importInterchange(importFileJson, genesisValidatorsRoot);

    console.log("Import completed successfully");
  },
};
