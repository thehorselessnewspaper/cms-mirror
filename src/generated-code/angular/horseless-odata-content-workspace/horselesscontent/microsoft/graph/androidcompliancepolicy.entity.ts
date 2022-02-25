//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
//#endregion

export interface AndroidCompliancePolicy extends DeviceCompliancePolicy {
  //#region ODataApiGen Properties
  passwordRequired: boolean;
  passwordMinimumLength?: number;
  passwordRequiredType: AndroidRequiredPasswordType;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordExpirationDays?: number;
  passwordPreviousPasswordBlockCount?: number;
  securityPreventInstallAppsFromUnknownSources: boolean;
  securityDisableUsbDebugging: boolean;
  securityRequireVerifyApps: boolean;
  deviceThreatProtectionEnabled: boolean;
  deviceThreatProtectionRequiredSecurityLevel: DeviceThreatProtectionLevel;
  securityBlockJailbrokenDevices: boolean;
  osMinimumVersion?: string;
  osMaximumVersion?: string;
  minAndroidSecurityPatchLevel?: string;
  storageRequireEncryption: boolean;
  securityRequireSafetyNetAttestationBasicIntegrity: boolean;
  securityRequireSafetyNetAttestationCertifiedDevice: boolean;
  securityRequireGooglePlayServices: boolean;
  securityRequireUpToDateSecurityProviders: boolean;
  securityRequireCompanyPortalAppIntegrity: boolean;
  //#endregion
}