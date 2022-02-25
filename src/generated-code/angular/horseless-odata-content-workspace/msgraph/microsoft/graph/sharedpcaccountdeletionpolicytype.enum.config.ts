//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharedPCAccountDeletionPolicyType } from './sharedpcaccountdeletionpolicytype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const SharedPCAccountDeletionPolicyTypeConfig = {
  name: 'sharedPCAccountDeletionPolicyType',
  members: SharedPCAccountDeletionPolicyType,
  fields: {
    immediate: {value: 0},
    diskSpaceThreshold: {value: 1},
    diskSpaceThresholdOrInactiveThreshold: {value: 2}
  }
} as EnumTypeConfig<SharedPCAccountDeletionPolicyType>;
//#endregion