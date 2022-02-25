//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecurrencePattern } from './recurrencepattern.complex';
import { RecurrenceRange } from './recurrencerange.complex';
//#endregion

export interface PatternedRecurrence {
  //#region ODataApiGen Properties
  pattern?: RecurrencePattern;
  range?: RecurrenceRange;
  //#endregion
}