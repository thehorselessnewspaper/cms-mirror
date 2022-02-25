//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaStream } from './mediastream.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaStreamComplexConfig = {
  name: 'mediaStream',
  fields: {
    streamId: {type: 'Edm.String'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    streamDirection: {type: 'microsoft.graph.callRecords.mediaStreamDirection', nullable: false},
    averageAudioDegradation: {type: 'Edm.Single'},
    averageJitter: {type: 'Edm.Duration'},
    maxJitter: {type: 'Edm.Duration'},
    averagePacketLossRate: {type: 'Edm.Single'},
    maxPacketLossRate: {type: 'Edm.Single'},
    averageRatioOfConcealedSamples: {type: 'Edm.Single'},
    maxRatioOfConcealedSamples: {type: 'Edm.Single'},
    averageRoundTripTime: {type: 'Edm.Duration'},
    maxRoundTripTime: {type: 'Edm.Duration'},
    packetUtilization: {type: 'Edm.Int64'},
    averageBandwidthEstimate: {type: 'Edm.Int64'},
    wasMediaBypassed: {type: 'Edm.Boolean'},
    postForwardErrorCorrectionPacketLossRate: {type: 'Edm.Single'},
    averageVideoFrameLossPercentage: {type: 'Edm.Single'},
    averageReceivedFrameRate: {type: 'Edm.Single'},
    lowFrameRateRatio: {type: 'Edm.Single'},
    averageVideoPacketLossRate: {type: 'Edm.Single'},
    averageVideoFrameRate: {type: 'Edm.Single'},
    lowVideoProcessingCapabilityRatio: {type: 'Edm.Single'},
    averageAudioNetworkJitter: {type: 'Edm.Duration'},
    maxAudioNetworkJitter: {type: 'Edm.Duration'}
  }
} as StructuredTypeConfig<MediaStream>;
//#endregion