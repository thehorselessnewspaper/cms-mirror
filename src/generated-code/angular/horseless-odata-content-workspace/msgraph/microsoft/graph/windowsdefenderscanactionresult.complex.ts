//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceActionResult } from './deviceactionresult.complex';
//#endregion

export interface WindowsDefenderScanActionResult extends DeviceActionResult {
  //#region ODataApiGen Properties
  scanType?: string;
  //#endregion
}