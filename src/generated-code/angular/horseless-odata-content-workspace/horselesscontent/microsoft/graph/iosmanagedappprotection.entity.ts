//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TargetedManagedAppProtection } from './targetedmanagedappprotection.entity';
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
//#endregion

export interface IosManagedAppProtection extends TargetedManagedAppProtection {
  //#region ODataApiGen Properties
  appDataEncryptionType: ManagedAppDataEncryptionType;
  minimumRequiredSdkVersion?: string;
  deployedAppCount: number;
  faceIdBlocked: boolean;
  customBrowserProtocol?: string;
  apps?: ManagedMobileApp[];
  deploymentSummary?: ManagedAppPolicyDeploymentSummary;
  //#endregion
}