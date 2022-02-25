//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecurrenceRange } from './recurrencerange.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RecurrenceRangeComplexConfig = {
  name: 'recurrenceRange',
  fields: {
    type: {type: 'graph.recurrenceRangeType'},
    startDate: {type: 'Edm.Date'},
    endDate: {type: 'Edm.Date'},
    recurrenceTimeZone: {type: 'Edm.String'},
    numberOfOccurrences: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<RecurrenceRange>;
//#endregion