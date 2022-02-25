//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NetworkInfo } from './networkinfo.complex';
import { DeviceInfo } from './deviceinfo.complex';
import { MediaStream } from './mediastream.complex';
//#endregion

export interface Media {
  //#region ODataApiGen Properties
  label?: string;
  callerNetwork?: NetworkInfo;
  calleeNetwork?: NetworkInfo;
  callerDevice?: DeviceInfo;
  calleeDevice?: DeviceInfo;
  streams?: MediaStream[];
  //#endregion
}