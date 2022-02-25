//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceActionResult } from './deviceactionresult.complex';
import { DeviceGeoLocation } from './devicegeolocation.complex';
//#endregion

export interface LocateDeviceActionResult extends DeviceActionResult {
  //#region ODataApiGen Properties
  deviceLocation?: DeviceGeoLocation;
  //#endregion
}