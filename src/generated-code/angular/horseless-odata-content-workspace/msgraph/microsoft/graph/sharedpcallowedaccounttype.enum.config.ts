//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharedPCAllowedAccountType } from './sharedpcallowedaccounttype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const SharedPCAllowedAccountTypeConfig = {
  name: 'sharedPCAllowedAccountType',
  flags: true,
  members: SharedPCAllowedAccountType,
  fields: {
    guest: {value: 1},
    domain: {value: 2}
  }
} as EnumTypeConfig<SharedPCAllowedAccountType>;
//#endregion