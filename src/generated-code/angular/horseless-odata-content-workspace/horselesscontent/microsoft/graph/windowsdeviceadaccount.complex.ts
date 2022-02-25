//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.complex';
//#endregion

export interface WindowsDeviceADAccount extends WindowsDeviceAccount {
  //#region ODataApiGen Properties
  domainName?: string;
  userName?: string;
  //#endregion
}