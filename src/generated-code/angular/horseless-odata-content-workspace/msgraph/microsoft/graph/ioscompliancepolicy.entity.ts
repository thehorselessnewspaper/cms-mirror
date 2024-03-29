﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
//#endregion

export interface IosCompliancePolicy extends DeviceCompliancePolicy {
  //#region ODataApiGen Properties
  passcodeBlockSimple: boolean;
  passcodeExpirationDays?: number;
  passcodeMinimumLength?: number;
  passcodeMinutesOfInactivityBeforeLock?: number;
  passcodePreviousPasscodeBlockCount?: number;
  passcodeMinimumCharacterSetCount?: number;
  passcodeRequiredType: RequiredPasswordType;
  passcodeRequired: boolean;
  osMinimumVersion?: string;
  osMaximumVersion?: string;
  securityBlockJailbrokenDevices: boolean;
  deviceThreatProtectionEnabled: boolean;
  deviceThreatProtectionRequiredSecurityLevel: DeviceThreatProtectionLevel;
  managedEmailProfileRequired: boolean;
  //#endregion
}