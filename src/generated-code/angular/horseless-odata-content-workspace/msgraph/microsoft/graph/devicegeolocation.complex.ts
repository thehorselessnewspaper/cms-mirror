//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

export interface DeviceGeoLocation {
  //#region ODataApiGen Properties
  lastCollectedDateTime: Date;
  longitude: number;
  latitude: number;
  altitude: number;
  horizontalAccuracy: number;
  verticalAccuracy: number;
  heading: number;
  speed: number;
  //#endregion
}