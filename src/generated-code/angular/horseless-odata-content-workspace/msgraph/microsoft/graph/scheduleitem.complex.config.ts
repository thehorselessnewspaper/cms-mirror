//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleItem } from './scheduleitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ScheduleItemComplexConfig = {
  name: 'scheduleItem',
  fields: {
    start: {type: 'graph.dateTimeTimeZone'},
    end: {type: 'graph.dateTimeTimeZone'},
    isPrivate: {type: 'Edm.Boolean'},
    status: {type: 'graph.freeBusyStatus'},
    subject: {type: 'Edm.String'},
    location: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ScheduleItem>;
//#endregion