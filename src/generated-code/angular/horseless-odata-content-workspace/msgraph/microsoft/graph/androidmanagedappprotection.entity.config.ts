//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidManagedAppProtection } from './androidmanagedappprotection.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AndroidManagedAppProtectionEntityConfig = {
  name: 'androidManagedAppProtection',
  base: 'microsoft.graph.targetedManagedAppProtection',
  fields: {
    screenCaptureBlocked: {type: 'Edm.Boolean', nullable: false},
    disableAppEncryptionIfDeviceEncryptionIsEnabled: {type: 'Edm.Boolean', nullable: false},
    encryptAppData: {type: 'Edm.Boolean', nullable: false},
    deployedAppCount: {type: 'Edm.Int32', nullable: false},
    minimumRequiredPatchVersion: {type: 'Edm.String'},
    minimumWarningPatchVersion: {type: 'Edm.String'},
    customBrowserPackageId: {type: 'Edm.String'},
    customBrowserDisplayName: {type: 'Edm.String'},
    apps: {type: 'graph.managedMobileApp', collection: true, navigation: true},
    deploymentSummary: {type: 'graph.managedAppPolicyDeploymentSummary', navigation: true}
  }
} as StructuredTypeConfig<AndroidManagedAppProtection>;
//#endregion