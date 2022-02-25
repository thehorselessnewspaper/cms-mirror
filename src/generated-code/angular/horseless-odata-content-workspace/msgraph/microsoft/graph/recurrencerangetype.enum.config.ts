//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecurrenceRangeType } from './recurrencerangetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RecurrenceRangeTypeConfig = {
  name: 'recurrenceRangeType',
  members: RecurrenceRangeType,
  fields: {
    endDate: {value: 0},
    noEnd: {value: 1},
    numbered: {value: 2}
  }
} as EnumTypeConfig<RecurrenceRangeType>;
//#endregion