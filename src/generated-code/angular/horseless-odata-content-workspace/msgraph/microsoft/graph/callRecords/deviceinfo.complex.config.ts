//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceInfo } from './deviceinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceInfoComplexConfig = {
  name: 'deviceInfo',
  fields: {
    captureDeviceName: {type: 'Edm.String'},
    captureDeviceDriver: {type: 'Edm.String'},
    renderDeviceName: {type: 'Edm.String'},
    renderDeviceDriver: {type: 'Edm.String'},
    sentSignalLevel: {type: 'Edm.Int32'},
    receivedSignalLevel: {type: 'Edm.Int32'},
    sentNoiseLevel: {type: 'Edm.Int32'},
    receivedNoiseLevel: {type: 'Edm.Int32'},
    initialSignalLevelRootMeanSquare: {type: 'Edm.Single'},
    cpuInsufficentEventRatio: {type: 'Edm.Single'},
    renderNotFunctioningEventRatio: {type: 'Edm.Single'},
    captureNotFunctioningEventRatio: {type: 'Edm.Single'},
    deviceGlitchEventRatio: {type: 'Edm.Single'},
    lowSpeechToNoiseEventRatio: {type: 'Edm.Single'},
    lowSpeechLevelEventRatio: {type: 'Edm.Single'},
    deviceClippingEventRatio: {type: 'Edm.Single'},
    howlingEventCount: {type: 'Edm.Int32'},
    renderZeroVolumeEventRatio: {type: 'Edm.Single'},
    renderMuteEventRatio: {type: 'Edm.Single'},
    micGlitchRate: {type: 'Edm.Single'},
    speakerGlitchRate: {type: 'Edm.Single'}
  }
} as StructuredTypeConfig<DeviceInfo>;
//#endregion