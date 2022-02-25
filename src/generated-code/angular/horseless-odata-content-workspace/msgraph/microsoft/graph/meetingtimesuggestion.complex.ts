//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { Location } from './location.complex';
import { AttendeeAvailability } from './attendeeavailability.complex';
import { TimeSlot } from './timeslot.complex';
//#endregion

export interface MeetingTimeSuggestion {
  //#region ODataApiGen Properties
  confidence?: number;
  order?: number;
  organizerAvailability?: FreeBusyStatus;
  attendeeAvailability?: AttendeeAvailability[];
  locations?: Location[];
  suggestionReason?: string;
  meetingTimeSlot?: TimeSlot;
  //#endregion
}