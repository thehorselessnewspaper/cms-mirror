//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtection } from './windowsinformationprotection.entity';
import { WindowsInformationProtectionPinCharacterRequirements } from './windowsinformationprotectionpincharacterrequirements.enum';
//#endregion

export interface WindowsInformationProtectionPolicy extends WindowsInformationProtection {
  //#region ODataApiGen Properties
  revokeOnMdmHandoffDisabled: boolean;
  mdmEnrollmentUrl?: string;
  windowsHelloForBusinessBlocked: boolean;
  pinMinimumLength: number;
  pinUppercaseLetters: WindowsInformationProtectionPinCharacterRequirements;
  pinLowercaseLetters: WindowsInformationProtectionPinCharacterRequirements;
  pinSpecialCharacters: WindowsInformationProtectionPinCharacterRequirements;
  pinExpirationDays: number;
  numberOfPastPinsRemembered: number;
  passwordMaximumAttemptCount: number;
  minutesOfInactivityBeforeDeviceLock: number;
  daysWithoutContactBeforeUnenroll: number;
  //#endregion
}