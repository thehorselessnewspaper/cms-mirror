//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
//#endregion

export interface ScheduleItem {
  //#region ODataApiGen Properties
  start?: DateTimeTimeZone;
  end?: DateTimeTimeZone;
  isPrivate?: boolean;
  status?: FreeBusyStatus;
  subject?: string;
  location?: string;
  //#endregion
}