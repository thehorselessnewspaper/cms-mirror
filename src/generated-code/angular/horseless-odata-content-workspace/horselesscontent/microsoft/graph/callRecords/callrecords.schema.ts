//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CallTypeConfig } from './calltype.enum.config';
import { ClientPlatformConfig } from './clientplatform.enum.config';
import { FailureStageConfig } from './failurestage.enum.config';
import { MediaStreamDirectionConfig } from './mediastreamdirection.enum.config';
import { NetworkConnectionTypeConfig } from './networkconnectiontype.enum.config';
import { ProductFamilyConfig } from './productfamily.enum.config';
import { ServiceRoleConfig } from './servicerole.enum.config';
import { UserFeedbackRatingConfig } from './userfeedbackrating.enum.config';
import { WifiBandConfig } from './wifiband.enum.config';
import { WifiRadioTypeConfig } from './wifiradiotype.enum.config';
import { ModalityConfig } from './modality.enum.config';
import { EndpointComplexConfig } from './endpoint.complex.config';
import { UserAgentComplexConfig } from './useragent.complex.config';
import { FailureInfoComplexConfig } from './failureinfo.complex.config';
import { MediaComplexConfig } from './media.complex.config';
import { NetworkInfoComplexConfig } from './networkinfo.complex.config';
import { DeviceInfoComplexConfig } from './deviceinfo.complex.config';
import { MediaStreamComplexConfig } from './mediastream.complex.config';
import { ParticipantEndpointComplexConfig } from './participantendpoint.complex.config';
import { UserFeedbackComplexConfig } from './userfeedback.complex.config';
import { FeedbackTokenSetComplexConfig } from './feedbacktokenset.complex.config';
import { ServiceEndpointComplexConfig } from './serviceendpoint.complex.config';
import { ClientUserAgentComplexConfig } from './clientuseragent.complex.config';
import { ServiceUserAgentComplexConfig } from './serviceuseragent.complex.config';
import { CallRecordEntityConfig } from './callrecord.entity.config';
import { SessionEntityConfig } from './session.entity.config';
import { SegmentEntityConfig } from './segment.entity.config';
//#endregion

//#region ODataApiGen SchemaConfig
export const CallRecordsSchema = {
  namespace: 'microsoft.graph.callRecords',
  enums: [CallTypeConfig,
    ClientPlatformConfig,
    FailureStageConfig,
    MediaStreamDirectionConfig,
    NetworkConnectionTypeConfig,
    ProductFamilyConfig,
    ServiceRoleConfig,
    UserFeedbackRatingConfig,
    WifiBandConfig,
    WifiRadioTypeConfig,
    ModalityConfig],
  entities: [EndpointComplexConfig,
    UserAgentComplexConfig,
    FailureInfoComplexConfig,
    MediaComplexConfig,
    NetworkInfoComplexConfig,
    DeviceInfoComplexConfig,
    MediaStreamComplexConfig,
    ParticipantEndpointComplexConfig,
    UserFeedbackComplexConfig,
    FeedbackTokenSetComplexConfig,
    ServiceEndpointComplexConfig,
    ClientUserAgentComplexConfig,
    ServiceUserAgentComplexConfig,
    CallRecordEntityConfig,
    SessionEntityConfig,
    SegmentEntityConfig],
  callables: [],
  containers: []
} as SchemaConfig;
//#endregion