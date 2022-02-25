//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.complex';
//#endregion

export interface TeleconferenceDeviceVideoQuality extends TeleconferenceDeviceMediaQuality {
  //#region ODataApiGen Properties
  averageInboundFrameRate?: number;
  averageOutboundFrameRate?: number;
  averageInboundBitRate?: number;
  averageOutboundBitRate?: number;
  //#endregion
}