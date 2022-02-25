//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { Location } from './location.complex';
//#endregion

export interface Reminder {
  //#region ODataApiGen Properties
  eventId?: string;
  eventStartTime?: DateTimeTimeZone;
  eventEndTime?: DateTimeTimeZone;
  changeKey?: string;
  eventSubject?: string;
  eventLocation?: Location;
  eventWebLink?: string;
  reminderFireTime?: DateTimeTimeZone;
  //#endregion
}