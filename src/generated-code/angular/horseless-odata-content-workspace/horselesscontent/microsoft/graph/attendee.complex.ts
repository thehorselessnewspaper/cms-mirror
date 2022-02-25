//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AttendeeBase } from './attendeebase.complex';
import { TimeSlot } from './timeslot.complex';
import { ResponseStatus } from './responsestatus.complex';
//#endregion

export interface Attendee extends AttendeeBase {
  //#region ODataApiGen Properties
  status?: ResponseStatus;
  proposedNewTime?: TimeSlot;
  //#endregion
}