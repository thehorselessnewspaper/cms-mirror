//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeleconferenceDeviceVideoQuality } from './teleconferencedevicevideoquality.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeleconferenceDeviceVideoQualityComplexConfig = {
  name: 'teleconferenceDeviceVideoQuality',
  base: 'microsoft.graph.teleconferenceDeviceMediaQuality',
  open: true,
  fields: {
    averageInboundFrameRate: {type: 'Edm.Double'},
    averageOutboundFrameRate: {type: 'Edm.Double'},
    averageInboundBitRate: {type: 'Edm.Double'},
    averageOutboundBitRate: {type: 'Edm.Double'}
  }
} as StructuredTypeConfig<TeleconferenceDeviceVideoQuality>;
//#endregion