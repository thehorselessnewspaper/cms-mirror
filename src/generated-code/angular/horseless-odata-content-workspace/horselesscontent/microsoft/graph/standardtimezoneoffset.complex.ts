//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DayOfWeek } from './dayofweek.enum';
//#endregion

export interface StandardTimeZoneOffset {
  //#region ODataApiGen Properties
  time?: Date;
  dayOccurrence?: number;
  dayOfWeek?: DayOfWeek;
  month?: number;
  year?: number;
  //#endregion
}