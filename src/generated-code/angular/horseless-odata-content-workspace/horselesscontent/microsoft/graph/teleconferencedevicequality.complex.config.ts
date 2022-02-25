//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeleconferenceDeviceQuality } from './teleconferencedevicequality.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeleconferenceDeviceQualityComplexConfig = {
  name: 'teleconferenceDeviceQuality',
  open: true,
  fields: {
    callChainId: {type: 'Edm.Guid', nullable: false},
    participantId: {type: 'Edm.Guid', nullable: false},
    mediaLegId: {type: 'Edm.Guid', nullable: false},
    deviceName: {type: 'Edm.String', nullable: false},
    deviceDescription: {type: 'Edm.String', nullable: false},
    cloudServiceName: {type: 'Edm.String'},
    cloudServiceInstanceName: {type: 'Edm.String'},
    cloudServiceDeploymentId: {type: 'Edm.String'},
    cloudServiceDeploymentEnvironment: {type: 'Edm.String'},
    mediaQualityList: {type: 'graph.teleconferenceDeviceMediaQuality', nullable: false, collection: true}
  }
} as StructuredTypeConfig<TeleconferenceDeviceQuality>;
//#endregion