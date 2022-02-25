//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Attendee } from './attendee.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AttendeeComplexConfig = {
  name: 'attendee',
  base: 'microsoft.graph.attendeeBase',
  fields: {
    status: {type: 'graph.responseStatus'},
    proposedNewTime: {type: 'graph.timeSlot'}
  }
} as StructuredTypeConfig<Attendee>;
//#endregion