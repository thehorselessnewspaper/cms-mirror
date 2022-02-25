//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharedPCConfiguration } from './sharedpcconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SharedPCConfigurationEntityConfig = {
  name: 'sharedPCConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    accountManagerPolicy: {type: 'graph.sharedPCAccountManagerPolicy'},
    allowedAccounts: {type: 'graph.sharedPCAllowedAccountType', nullable: false},
    allowLocalStorage: {type: 'Edm.Boolean', nullable: false},
    disableAccountManager: {type: 'Edm.Boolean', nullable: false},
    disableEduPolicies: {type: 'Edm.Boolean', nullable: false},
    disablePowerPolicies: {type: 'Edm.Boolean', nullable: false},
    disableSignInOnResume: {type: 'Edm.Boolean', nullable: false},
    enabled: {type: 'Edm.Boolean', nullable: false},
    idleTimeBeforeSleepInSeconds: {type: 'Edm.Int32'},
    kioskAppDisplayName: {type: 'Edm.String'},
    kioskAppUserModelId: {type: 'Edm.String'},
    maintenanceStartTime: {type: 'Edm.TimeOfDay'}
  }
} as StructuredTypeConfig<SharedPCConfiguration>;
//#endregion