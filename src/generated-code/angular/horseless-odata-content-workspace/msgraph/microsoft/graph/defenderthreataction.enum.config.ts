//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DefenderThreatAction } from './defenderthreataction.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DefenderThreatActionConfig = {
  name: 'defenderThreatAction',
  members: DefenderThreatAction,
  fields: {
    deviceDefault: {value: 0},
    clean: {value: 1},
    quarantine: {value: 2},
    remove: {value: 3},
    allow: {value: 4},
    userDefined: {value: 5},
    block: {value: 6}
  }
} as EnumTypeConfig<DefenderThreatAction>;
//#endregion