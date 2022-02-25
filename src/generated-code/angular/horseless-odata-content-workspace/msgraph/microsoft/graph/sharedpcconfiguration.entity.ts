//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { SharedPCAllowedAccountType } from './sharedpcallowedaccounttype.enum';
import { SharedPCAccountManagerPolicy } from './sharedpcaccountmanagerpolicy.complex';
//#endregion

export interface SharedPCConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  accountManagerPolicy?: SharedPCAccountManagerPolicy;
  allowedAccounts: SharedPCAllowedAccountType;
  allowLocalStorage: boolean;
  disableAccountManager: boolean;
  disableEduPolicies: boolean;
  disablePowerPolicies: boolean;
  disableSignInOnResume: boolean;
  enabled: boolean;
  idleTimeBeforeSleepInSeconds?: number;
  kioskAppDisplayName?: string;
  kioskAppUserModelId?: string;
  maintenanceStartTime?: Date;
  //#endregion
}