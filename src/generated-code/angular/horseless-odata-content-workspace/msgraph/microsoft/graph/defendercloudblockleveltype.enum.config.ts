//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DefenderCloudBlockLevelType } from './defendercloudblockleveltype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DefenderCloudBlockLevelTypeConfig = {
  name: 'defenderCloudBlockLevelType',
  members: DefenderCloudBlockLevelType,
  fields: {
    notConfigured: {value: 0},
    high: {value: 1},
    highPlus: {value: 2},
    zeroTolerance: {value: 3}
  }
} as EnumTypeConfig<DefenderCloudBlockLevelType>;
//#endregion