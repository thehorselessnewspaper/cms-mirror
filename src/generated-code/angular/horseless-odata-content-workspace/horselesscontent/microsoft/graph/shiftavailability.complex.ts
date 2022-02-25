//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PatternedRecurrence } from './patternedrecurrence.complex';
import { TimeRange } from './timerange.complex';
//#endregion

export interface ShiftAvailability {
  //#region ODataApiGen Properties
  recurrence?: PatternedRecurrence;
  timeZone?: string;
  timeSlots?: TimeRange[];
  //#endregion
}