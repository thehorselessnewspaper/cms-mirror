//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeetingParticipantInfo } from './meetingparticipantinfo.complex';
//#endregion

export interface MeetingParticipants {
  //#region ODataApiGen Properties
  organizer?: MeetingParticipantInfo;
  attendees?: MeetingParticipantInfo[];
  //#endregion
}