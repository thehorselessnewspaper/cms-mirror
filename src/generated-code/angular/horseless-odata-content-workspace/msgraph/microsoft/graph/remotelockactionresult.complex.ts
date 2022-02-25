//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceActionResult } from './deviceactionresult.complex';
//#endregion

export interface RemoteLockActionResult extends DeviceActionResult {
  //#region ODataApiGen Properties
  unlockPin?: string;
  //#endregion
}