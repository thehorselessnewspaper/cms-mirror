//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

export interface DeviceInfo {
  //#region ODataApiGen Properties
  captureDeviceName?: string;
  captureDeviceDriver?: string;
  renderDeviceName?: string;
  renderDeviceDriver?: string;
  sentSignalLevel?: number;
  receivedSignalLevel?: number;
  sentNoiseLevel?: number;
  receivedNoiseLevel?: number;
  initialSignalLevelRootMeanSquare?: number;
  cpuInsufficentEventRatio?: number;
  renderNotFunctioningEventRatio?: number;
  captureNotFunctioningEventRatio?: number;
  deviceGlitchEventRatio?: number;
  lowSpeechToNoiseEventRatio?: number;
  lowSpeechLevelEventRatio?: number;
  deviceClippingEventRatio?: number;
  howlingEventCount?: number;
  renderZeroVolumeEventRatio?: number;
  renderMuteEventRatio?: number;
  micGlitchRate?: number;
  speakerGlitchRate?: number;
  //#endregion
}