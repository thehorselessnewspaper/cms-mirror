//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AndroidRequiredPasswordTypeConfig = {
  name: 'androidRequiredPasswordType',
  members: AndroidRequiredPasswordType,
  fields: {
    deviceDefault: {value: 0},
    alphabetic: {value: 1},
    alphanumeric: {value: 2},
    alphanumericWithSymbols: {value: 3},
    lowSecurityBiometric: {value: 4},
    numeric: {value: 5},
    numericComplex: {value: 6},
    any: {value: 7}
  }
} as EnumTypeConfig<AndroidRequiredPasswordType>;
//#endregion