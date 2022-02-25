//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.complex';
//#endregion

export interface TeleconferenceDeviceQuality {
  //#region ODataApiGen Properties
  callChainId: string;
  participantId: string;
  mediaLegId: string;
  deviceName: string;
  deviceDescription: string;
  cloudServiceName?: string;
  cloudServiceInstanceName?: string;
  cloudServiceDeploymentId?: string;
  cloudServiceDeploymentEnvironment?: string;
  mediaQualityList: TeleconferenceDeviceMediaQuality[];
  //#endregion
}