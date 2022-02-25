//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosCompliancePolicy } from './ioscompliancepolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosCompliancePolicyEntityConfig = {
  name: 'iosCompliancePolicy',
  base: 'microsoft.graph.deviceCompliancePolicy',
  fields: {
    passcodeBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passcodeExpirationDays: {type: 'Edm.Int32'},
    passcodeMinimumLength: {type: 'Edm.Int32'},
    passcodeMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passcodePreviousPasscodeBlockCount: {type: 'Edm.Int32'},
    passcodeMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passcodeRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passcodeRequired: {type: 'Edm.Boolean', nullable: false},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    securityBlockJailbrokenDevices: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionEnabled: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionRequiredSecurityLevel: {type: 'graph.deviceThreatProtectionLevel', nullable: false},
    managedEmailProfileRequired: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<IosCompliancePolicy>;
//#endregion