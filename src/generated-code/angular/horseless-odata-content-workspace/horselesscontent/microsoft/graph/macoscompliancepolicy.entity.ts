//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
//#endregion

export interface MacOSCompliancePolicy extends DeviceCompliancePolicy {
  //#region ODataApiGen Properties
  passwordRequired: boolean;
  passwordBlockSimple: boolean;
  passwordExpirationDays?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordRequiredType: RequiredPasswordType;
  osMinimumVersion?: string;
  osMaximumVersion?: string;
  systemIntegrityProtectionEnabled: boolean;
  deviceThreatProtectionEnabled: boolean;
  deviceThreatProtectionRequiredSecurityLevel: DeviceThreatProtectionLevel;
  storageRequireEncryption: boolean;
  firewallEnabled: boolean;
  firewallBlockAllIncoming: boolean;
  firewallEnableStealthMode: boolean;
  //#endregion
}