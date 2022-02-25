//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceActionResult } from './deviceactionresult.complex';
//#endregion

export interface ResetPasscodeActionResult extends DeviceActionResult {
  //#region ODataApiGen Properties
  passcode?: string;
  //#endregion
}