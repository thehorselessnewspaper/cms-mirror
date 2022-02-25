//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeZoneBase } from './timezonebase.complex';
import { StandardTimeZoneOffset } from './standardtimezoneoffset.complex';
import { DaylightTimeZoneOffset } from './daylighttimezoneoffset.complex';
//#endregion

export interface CustomTimeZone extends TimeZoneBase {
  //#region ODataApiGen Properties
  bias?: number;
  standardOffset?: StandardTimeZoneOffset;
  daylightOffset?: DaylightTimeZoneOffset;
  //#endregion
}