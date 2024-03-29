﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsPhone81CompliancePolicy } from './windowsphone81compliancepolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsPhone81CompliancePolicyEntityConfig = {
  name: 'windowsPhone81CompliancePolicy',
  base: 'microsoft.graph.deviceCompliancePolicy',
  fields: {
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WindowsPhone81CompliancePolicy>;
//#endregion