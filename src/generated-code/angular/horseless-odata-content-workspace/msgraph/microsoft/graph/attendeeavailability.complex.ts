//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { AttendeeBase } from './attendeebase.complex';
//#endregion

export interface AttendeeAvailability {
  //#region ODataApiGen Properties
  attendee?: AttendeeBase;
  availability?: FreeBusyStatus;
  //#endregion
}