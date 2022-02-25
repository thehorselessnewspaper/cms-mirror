//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DefaultManagedAppProtection } from './defaultmanagedappprotection.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DefaultManagedAppProtectionEntityConfig = {
  name: 'defaultManagedAppProtection',
  base: 'microsoft.graph.managedAppProtection',
  fields: {
    appDataEncryptionType: {type: 'graph.managedAppDataEncryptionType', nullable: false},
    screenCaptureBlocked: {type: 'Edm.Boolean', nullable: false},
    encryptAppData: {type: 'Edm.Boolean', nullable: false},
    disableAppEncryptionIfDeviceEncryptionIsEnabled: {type: 'Edm.Boolean', nullable: false},
    minimumRequiredSdkVersion: {type: 'Edm.String'},
    customSettings: {type: 'graph.keyValuePair', nullable: false, collection: true},
    deployedAppCount: {type: 'Edm.Int32', nullable: false},
    minimumRequiredPatchVersion: {type: 'Edm.String'},
    minimumWarningPatchVersion: {type: 'Edm.String'},
    faceIdBlocked: {type: 'Edm.Boolean', nullable: false},
    apps: {type: 'graph.managedMobileApp', collection: true, navigation: true},
    deploymentSummary: {type: 'graph.managedAppPolicyDeploymentSummary', navigation: true}
  }
} as StructuredTypeConfig<DefaultManagedAppProtection>;
//#endregion