//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenotePatchActionType } from './onenotepatchactiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const OnenotePatchActionTypeConfig = {
  name: 'onenotePatchActionType',
  members: OnenotePatchActionType,
  fields: {
    Replace: {value: 0},
    Append: {value: 1},
    Delete: {value: 2},
    Insert: {value: 3},
    Prepend: {value: 4}
  }
} as EnumTypeConfig<OnenotePatchActionType>;
//#endregion