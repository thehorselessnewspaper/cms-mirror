//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppProtection } from './managedappprotection.entity';
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
import { KeyValuePair } from './keyvaluepair.complex';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
//#endregion

export interface DefaultManagedAppProtection extends ManagedAppProtection {
  //#region ODataApiGen Properties
  appDataEncryptionType: ManagedAppDataEncryptionType;
  screenCaptureBlocked: boolean;
  encryptAppData: boolean;
  disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
  minimumRequiredSdkVersion?: string;
  customSettings: KeyValuePair[];
  deployedAppCount: number;
  minimumRequiredPatchVersion?: string;
  minimumWarningPatchVersion?: string;
  faceIdBlocked: boolean;
  apps?: ManagedMobileApp[];
  deploymentSummary?: ManagedAppPolicyDeploymentSummary;
  //#endregion
}