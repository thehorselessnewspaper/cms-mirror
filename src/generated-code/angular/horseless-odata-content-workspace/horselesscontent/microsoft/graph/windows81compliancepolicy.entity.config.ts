//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Windows81CompliancePolicy } from './windows81compliancepolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const Windows81CompliancePolicyEntityConfig = {
  name: 'windows81CompliancePolicy',
  base: 'microsoft.graph.deviceCompliancePolicy',
  fields: {
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<Windows81CompliancePolicy>;
//#endregion