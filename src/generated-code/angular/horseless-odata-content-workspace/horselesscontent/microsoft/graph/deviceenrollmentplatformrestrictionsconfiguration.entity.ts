//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { DeviceEnrollmentPlatformRestriction } from './deviceenrollmentplatformrestriction.complex';
//#endregion

export interface DeviceEnrollmentPlatformRestrictionsConfiguration extends DeviceEnrollmentConfiguration {
  //#region ODataApiGen Properties
  iosRestriction?: DeviceEnrollmentPlatformRestriction;
  windowsRestriction?: DeviceEnrollmentPlatformRestriction;
  windowsMobileRestriction?: DeviceEnrollmentPlatformRestriction;
  androidRestriction?: DeviceEnrollmentPlatformRestriction;
  macOSRestriction?: DeviceEnrollmentPlatformRestriction;
  //#endregion
}