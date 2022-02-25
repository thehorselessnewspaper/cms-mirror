//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DayOfWeek } from './dayofweek.enum';
import { RecurrencePatternType } from './recurrencepatterntype.enum';
import { WeekIndex } from './weekindex.enum';
//#endregion

export interface RecurrencePattern {
  //#region ODataApiGen Properties
  type?: RecurrencePatternType;
  interval: number;
  month: number;
  dayOfMonth: number;
  daysOfWeek?: DayOfWeek;
  firstDayOfWeek?: DayOfWeek;
  index?: WeekIndex;
  //#endregion
}