//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnlineMeeting } from './onlinemeeting.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnlineMeetingEntityConfig = {
  name: 'onlineMeeting',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    creationDateTime: {type: 'Edm.DateTimeOffset'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    joinWebUrl: {type: 'Edm.String'},
    subject: {type: 'Edm.String'},
    participants: {type: 'graph.meetingParticipants'},
    audioConferencing: {type: 'graph.audioConferencing'},
    chatInfo: {type: 'graph.chatInfo'},
    videoTeleconferenceId: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'},
    joinInformation: {type: 'graph.itemBody'}
  }
} as StructuredTypeConfig<OnlineMeeting>;
//#endregion