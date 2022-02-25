//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserAccountSecurityType } from './useraccountsecuritytype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const UserAccountSecurityTypeConfig = {
  name: 'userAccountSecurityType',
  members: UserAccountSecurityType,
  fields: {
    unknown: {value: 0},
    standard: {value: 1},
    power: {value: 2},
    administrator: {value: 3},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<UserAccountSecurityType>;
//#endregion