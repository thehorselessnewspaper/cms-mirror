//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecurrenceRangeType } from './recurrencerangetype.enum';
//#endregion

export interface RecurrenceRange {
  //#region ODataApiGen Properties
  type?: RecurrenceRangeType;
  startDate?: Date;
  endDate?: Date;
  recurrenceTimeZone?: string;
  numberOfOccurrences: number;
  //#endregion
}