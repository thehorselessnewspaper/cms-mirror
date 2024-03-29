﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MacOSCompliancePolicy } from './macoscompliancepolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MacOSCompliancePolicyEntityConfig = {
  name: 'macOSCompliancePolicy',
  base: 'microsoft.graph.deviceCompliancePolicy',
  fields: {
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    systemIntegrityProtectionEnabled: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionEnabled: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionRequiredSecurityLevel: {type: 'graph.deviceThreatProtectionLevel', nullable: false},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false},
    firewallEnabled: {type: 'Edm.Boolean', nullable: false},
    firewallBlockAllIncoming: {type: 'Edm.Boolean', nullable: false},
    firewallEnableStealthMode: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<MacOSCompliancePolicy>;
//#endregion