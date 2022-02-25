//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Importance } from './importance.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ImportanceConfig = {
  name: 'importance',
  members: Importance,
  fields: {
    low: {value: 0},
    normal: {value: 1},
    high: {value: 2}
  }
} as EnumTypeConfig<Importance>;
//#endregion