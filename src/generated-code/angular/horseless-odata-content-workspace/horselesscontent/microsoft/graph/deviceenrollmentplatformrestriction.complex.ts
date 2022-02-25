//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

export interface DeviceEnrollmentPlatformRestriction {
  //#region ODataApiGen Properties
  platformBlocked: boolean;
  personalDeviceEnrollmentBlocked: boolean;
  osMinimumVersion?: string;
  osMaximumVersion?: string;
  //#endregion
}