//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DayOfWeek } from './dayofweek.enum';
import { TimeZoneBase } from './timezonebase.complex';
//#endregion

export interface WorkingHours {
  //#region ODataApiGen Properties
  daysOfWeek?: DayOfWeek;
  startTime?: Date;
  endTime?: Date;
  timeZone?: TimeZoneBase;
  //#endregion
}