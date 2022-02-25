//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecurrencePattern } from './recurrencepattern.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RecurrencePatternComplexConfig = {
  name: 'recurrencePattern',
  fields: {
    type: {type: 'graph.recurrencePatternType'},
    interval: {type: 'Edm.Int32', nullable: false},
    month: {type: 'Edm.Int32', nullable: false},
    dayOfMonth: {type: 'Edm.Int32', nullable: false},
    daysOfWeek: {type: 'graph.dayOfWeek', collection: true},
    firstDayOfWeek: {type: 'graph.dayOfWeek'},
    index: {type: 'graph.weekIndex'}
  }
} as StructuredTypeConfig<RecurrencePattern>;
//#endregion