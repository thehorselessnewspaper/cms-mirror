//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeConstraint } from './timeconstraint.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TimeConstraintComplexConfig = {
  name: 'timeConstraint',
  fields: {
    activityDomain: {type: 'graph.activityDomain'},
    timeSlots: {type: 'graph.timeSlot', collection: true}
  }
} as StructuredTypeConfig<TimeConstraint>;
//#endregion