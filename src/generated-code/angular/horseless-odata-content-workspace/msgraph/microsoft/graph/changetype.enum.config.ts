//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChangeType } from './changetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ChangeTypeConfig = {
  name: 'changeType',
  members: ChangeType,
  fields: {
    created: {value: 0},
    updated: {value: 1},
    deleted: {value: 2}
  }
} as EnumTypeConfig<ChangeType>;
//#endregion