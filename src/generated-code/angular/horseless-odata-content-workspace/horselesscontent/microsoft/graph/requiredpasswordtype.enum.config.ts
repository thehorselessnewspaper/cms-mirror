//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RequiredPasswordType } from './requiredpasswordtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RequiredPasswordTypeConfig = {
  name: 'requiredPasswordType',
  members: RequiredPasswordType,
  fields: {
    deviceDefault: {value: 0},
    alphanumeric: {value: 1},
    numeric: {value: 2}
  }
} as EnumTypeConfig<RequiredPasswordType>;
//#endregion