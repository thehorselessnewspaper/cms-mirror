//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleInformation } from './scheduleinformation.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ScheduleInformationComplexConfig = {
  name: 'scheduleInformation',
  fields: {
    scheduleId: {type: 'Edm.String'},
    scheduleItems: {type: 'graph.scheduleItem', collection: true},
    availabilityView: {type: 'Edm.String'},
    error: {type: 'graph.freeBusyError'},
    workingHours: {type: 'graph.workingHours'}
  }
} as StructuredTypeConfig<ScheduleInformation>;
//#endregion