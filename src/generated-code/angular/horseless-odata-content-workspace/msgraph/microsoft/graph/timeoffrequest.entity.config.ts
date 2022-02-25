//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeOffRequest } from './timeoffrequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TimeOffRequestEntityConfig = {
  name: 'timeOffRequest',
  base: 'microsoft.graph.scheduleChangeRequest',
  fields: {
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    timeOffReasonId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TimeOffRequest>;
//#endregion