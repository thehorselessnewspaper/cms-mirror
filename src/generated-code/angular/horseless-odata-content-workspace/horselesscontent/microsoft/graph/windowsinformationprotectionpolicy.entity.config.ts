//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionPolicy } from './windowsinformationprotectionpolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsInformationProtectionPolicyEntityConfig = {
  name: 'windowsInformationProtectionPolicy',
  base: 'microsoft.graph.windowsInformationProtection',
  fields: {
    revokeOnMdmHandoffDisabled: {type: 'Edm.Boolean', nullable: false},
    mdmEnrollmentUrl: {type: 'Edm.String'},
    windowsHelloForBusinessBlocked: {type: 'Edm.Boolean', nullable: false},
    pinMinimumLength: {type: 'Edm.Int32', nullable: false},
    pinUppercaseLetters: {type: 'graph.windowsInformationProtectionPinCharacterRequirements', nullable: false},
    pinLowercaseLetters: {type: 'graph.windowsInformationProtectionPinCharacterRequirements', nullable: false},
    pinSpecialCharacters: {type: 'graph.windowsInformationProtectionPinCharacterRequirements', nullable: false},
    pinExpirationDays: {type: 'Edm.Int32', nullable: false},
    numberOfPastPinsRemembered: {type: 'Edm.Int32', nullable: false},
    passwordMaximumAttemptCount: {type: 'Edm.Int32', nullable: false},
    minutesOfInactivityBeforeDeviceLock: {type: 'Edm.Int32', nullable: false},
    daysWithoutContactBeforeUnenroll: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<WindowsInformationProtectionPolicy>;
//#endregion