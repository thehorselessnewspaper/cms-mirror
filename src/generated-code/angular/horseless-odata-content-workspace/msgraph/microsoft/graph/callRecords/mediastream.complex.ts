﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaStreamDirection } from './mediastreamdirection.enum';
//#endregion

export interface MediaStream {
  //#region ODataApiGen Properties
  streamId?: string;
  startDateTime?: Date;
  endDateTime?: Date;
  streamDirection: MediaStreamDirection;
  averageAudioDegradation?: number;
  averageJitter?: Duration;
  maxJitter?: Duration;
  averagePacketLossRate?: number;
  maxPacketLossRate?: number;
  averageRatioOfConcealedSamples?: number;
  maxRatioOfConcealedSamples?: number;
  averageRoundTripTime?: Duration;
  maxRoundTripTime?: Duration;
  packetUtilization?: number;
  averageBandwidthEstimate?: number;
  wasMediaBypassed?: boolean;
  postForwardErrorCorrectionPacketLossRate?: number;
  averageVideoFrameLossPercentage?: number;
  averageReceivedFrameRate?: number;
  lowFrameRateRatio?: number;
  averageVideoPacketLossRate?: number;
  averageVideoFrameRate?: number;
  lowVideoProcessingCapabilityRatio?: number;
  averageAudioNetworkJitter?: Duration;
  maxAudioNetworkJitter?: Duration;
  //#endregion
}