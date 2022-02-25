//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeleconferenceDeviceMediaQualityComplexConfig = {
  name: 'teleconferenceDeviceMediaQuality',
  open: true,
  fields: {
    channelIndex: {type: 'Edm.Int32', nullable: false},
    mediaDuration: {type: 'Edm.Duration'},
    networkLinkSpeedInBytes: {type: 'Edm.Int64'},
    localIPAddress: {type: 'Edm.String'},
    localPort: {type: 'Edm.Int32'},
    remoteIPAddress: {type: 'Edm.String'},
    remotePort: {type: 'Edm.Int32'},
    inboundPackets: {type: 'Edm.Int64'},
    outboundPackets: {type: 'Edm.Int64'},
    averageInboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    averageOutboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    maximumInboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    maximumOutboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    averageInboundRoundTripDelay: {type: 'Edm.Duration'},
    averageOutboundRoundTripDelay: {type: 'Edm.Duration'},
    maximumInboundRoundTripDelay: {type: 'Edm.Duration'},
    maximumOutboundRoundTripDelay: {type: 'Edm.Duration'},
    averageInboundJitter: {type: 'Edm.Duration'},
    averageOutboundJitter: {type: 'Edm.Duration'},
    maximumInboundJitter: {type: 'Edm.Duration'},
    maximumOutboundJitter: {type: 'Edm.Duration'}
  }
} as StructuredTypeConfig<TeleconferenceDeviceMediaQuality>;
//#endregion