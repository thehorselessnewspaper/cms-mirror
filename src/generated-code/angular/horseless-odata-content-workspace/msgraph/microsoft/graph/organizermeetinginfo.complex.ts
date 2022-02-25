//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeetingInfo } from './meetinginfo.complex';
import { IdentitySet } from './identityset.complex';
//#endregion

export interface OrganizerMeetingInfo extends MeetingInfo {
  //#region ODataApiGen Properties
  organizer: IdentitySet;
  //#endregion
}