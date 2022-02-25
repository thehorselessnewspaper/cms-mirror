//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AttendeeAvailability } from './attendeeavailability.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AttendeeAvailabilityComplexConfig = {
  name: 'attendeeAvailability',
  fields: {
    attendee: {type: 'graph.attendeeBase'},
    availability: {type: 'graph.freeBusyStatus'}
  }
} as StructuredTypeConfig<AttendeeAvailability>;
//#endregion