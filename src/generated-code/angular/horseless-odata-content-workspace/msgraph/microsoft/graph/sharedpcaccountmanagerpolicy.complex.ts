//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharedPCAccountDeletionPolicyType } from './sharedpcaccountdeletionpolicytype.enum';
//#endregion

export interface SharedPCAccountManagerPolicy {
  //#region ODataApiGen Properties
  accountDeletionPolicy: SharedPCAccountDeletionPolicyType;
  cacheAccountsAboveDiskFreePercentage?: number;
  inactiveThresholdDays?: number;
  removeAccountsBelowDiskFreePercentage?: number;
  //#endregion
}