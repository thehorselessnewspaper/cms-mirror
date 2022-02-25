//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharedPCAccountManagerPolicy } from './sharedpcaccountmanagerpolicy.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SharedPCAccountManagerPolicyComplexConfig = {
  name: 'sharedPCAccountManagerPolicy',
  fields: {
    accountDeletionPolicy: {type: 'graph.sharedPCAccountDeletionPolicyType', nullable: false},
    cacheAccountsAboveDiskFreePercentage: {type: 'Edm.Int32'},
    inactiveThresholdDays: {type: 'Edm.Int32'},
    removeAccountsBelowDiskFreePercentage: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<SharedPCAccountManagerPolicy>;
//#endregion