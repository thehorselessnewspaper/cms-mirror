//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ServiceRole } from './servicerole.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ServiceRoleConfig = {
  name: 'serviceRole',
  members: ServiceRole,
  fields: {
    unknown: {value: 0},
    customBot: {value: 1},
    skypeForBusinessMicrosoftTeamsGateway: {value: 2},
    skypeForBusinessAudioVideoMcu: {value: 3},
    skypeForBusinessApplicationSharingMcu: {value: 4},
    skypeForBusinessCallQueues: {value: 5},
    skypeForBusinessAutoAttendant: {value: 6},
    mediationServer: {value: 7},
    mediationServerCloudConnectorEdition: {value: 8},
    exchangeUnifiedMessagingService: {value: 9},
    mediaController: {value: 10},
    conferencingAnnouncementService: {value: 11},
    conferencingAttendant: {value: 12},
    audioTeleconferencerController: {value: 13},
    skypeForBusinessUnifiedCommunicationApplicationPlatform: {value: 14},
    responseGroupServiceAnnouncementService: {value: 15},
    gateway: {value: 16},
    skypeTranslator: {value: 17},
    skypeForBusinessAttendant: {value: 18},
    responseGroupService: {value: 19},
    voicemail: {value: 20},
    unknownFutureValue: {value: 21}
  }
} as EnumTypeConfig<ServiceRole>;
//#endregion