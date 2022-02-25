//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidWorkProfileRequiredPasswordType } from './androidworkprofilerequiredpasswordtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AndroidWorkProfileRequiredPasswordTypeConfig = {
  name: 'androidWorkProfileRequiredPasswordType',
  members: AndroidWorkProfileRequiredPasswordType,
  fields: {
    deviceDefault: {value: 0},
    lowSecurityBiometric: {value: 1},
    required: {value: 2},
    atLeastNumeric: {value: 3},
    numericComplex: {value: 4},
    atLeastAlphabetic: {value: 5},
    atLeastAlphanumeric: {value: 6},
    alphanumericWithSymbols: {value: 7}
  }
} as EnumTypeConfig<AndroidWorkProfileRequiredPasswordType>;
//#endregion