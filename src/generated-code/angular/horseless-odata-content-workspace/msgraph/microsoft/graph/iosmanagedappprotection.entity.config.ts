//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosManagedAppProtection } from './iosmanagedappprotection.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosManagedAppProtectionEntityConfig = {
  name: 'iosManagedAppProtection',
  base: 'microsoft.graph.targetedManagedAppProtection',
  fields: {
    appDataEncryptionType: {type: 'graph.managedAppDataEncryptionType', nullable: false},
    minimumRequiredSdkVersion: {type: 'Edm.String'},
    deployedAppCount: {type: 'Edm.Int32', nullable: false},
    faceIdBlocked: {type: 'Edm.Boolean', nullable: false},
    customBrowserProtocol: {type: 'Edm.String'},
    apps: {type: 'graph.managedMobileApp', collection: true, navigation: true},
    deploymentSummary: {type: 'graph.managedAppPolicyDeploymentSummary', navigation: true}
  }
} as StructuredTypeConfig<IosManagedAppProtection>;
//#endregion