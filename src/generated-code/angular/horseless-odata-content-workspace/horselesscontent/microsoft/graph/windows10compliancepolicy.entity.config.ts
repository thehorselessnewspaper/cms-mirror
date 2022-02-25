//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Windows10CompliancePolicy } from './windows10compliancepolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const Windows10CompliancePolicyEntityConfig = {
  name: 'windows10CompliancePolicy',
  base: 'microsoft.graph.deviceCompliancePolicy',
  fields: {
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordRequiredToUnlockFromIdle: {type: 'Edm.Boolean', nullable: false},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    requireHealthyDeviceReport: {type: 'Edm.Boolean', nullable: false},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    mobileOsMinimumVersion: {type: 'Edm.String'},
    mobileOsMaximumVersion: {type: 'Edm.String'},
    earlyLaunchAntiMalwareDriverEnabled: {type: 'Edm.Boolean', nullable: false},
    bitLockerEnabled: {type: 'Edm.Boolean', nullable: false},
    secureBootEnabled: {type: 'Edm.Boolean', nullable: false},
    codeIntegrityEnabled: {type: 'Edm.Boolean', nullable: false},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<Windows10CompliancePolicy>;
//#endregion