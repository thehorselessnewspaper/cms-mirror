//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DefenderScanType } from './defenderscantype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DefenderScanTypeConfig = {
  name: 'defenderScanType',
  members: DefenderScanType,
  fields: {
    userDefined: {value: 0},
    disabled: {value: 1},
    quick: {value: 2},
    full: {value: 3}
  }
} as EnumTypeConfig<DefenderScanType>;
//#endregion