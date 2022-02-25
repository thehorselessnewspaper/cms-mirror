//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarGroup } from './calendargroup.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CalendarGroupEntityConfig = {
  name: 'calendarGroup',
  base: 'microsoft.graph.entity',
  fields: {
    name: {type: 'Edm.String'},
    classId: {type: 'Edm.Guid'},
    changeKey: {type: 'Edm.String'},
    calendars: {type: 'graph.calendar', collection: true, navigation: true}
  }
} as StructuredTypeConfig<CalendarGroup>;
//#endregion