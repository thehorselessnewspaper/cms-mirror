//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecurrencePatternType } from './recurrencepatterntype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RecurrencePatternTypeConfig = {
  name: 'recurrencePatternType',
  members: RecurrencePatternType,
  fields: {
    daily: {value: 0},
    weekly: {value: 1},
    absoluteMonthly: {value: 2},
    relativeMonthly: {value: 3},
    absoluteYearly: {value: 4},
    relativeYearly: {value: 5}
  }
} as EnumTypeConfig<RecurrencePatternType>;
//#endregion