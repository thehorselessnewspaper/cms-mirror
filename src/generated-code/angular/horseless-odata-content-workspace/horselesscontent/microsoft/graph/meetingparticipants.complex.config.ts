//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeetingParticipants } from './meetingparticipants.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MeetingParticipantsComplexConfig = {
  name: 'meetingParticipants',
  fields: {
    organizer: {type: 'graph.meetingParticipantInfo'},
    attendees: {type: 'graph.meetingParticipantInfo', collection: true}
  }
} as StructuredTypeConfig<MeetingParticipants>;
//#endregion