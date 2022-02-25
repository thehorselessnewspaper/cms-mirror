//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.complex';
//#endregion

export interface UpdateWindowsDeviceAccountActionParameter {
  //#region ODataApiGen Properties
  deviceAccount?: WindowsDeviceAccount;
  passwordRotationEnabled?: boolean;
  calendarSyncEnabled?: boolean;
  deviceAccountEmail?: string;
  exchangeServer?: string;
  sessionInitiationProtocalAddress?: string;
  //#endregion
}