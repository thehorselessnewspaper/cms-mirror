//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkingHours } from './workinghours.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkingHoursComplexConfig = {
  name: 'workingHours',
  fields: {
    daysOfWeek: {type: 'graph.dayOfWeek', collection: true},
    startTime: {type: 'Edm.TimeOfDay'},
    endTime: {type: 'Edm.TimeOfDay'},
    timeZone: {type: 'graph.timeZoneBase'}
  }
} as StructuredTypeConfig<WorkingHours>;
//#endregion