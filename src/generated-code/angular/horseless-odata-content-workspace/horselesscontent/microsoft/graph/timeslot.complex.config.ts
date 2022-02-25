//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeSlot } from './timeslot.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TimeSlotComplexConfig = {
  name: 'timeSlot',
  fields: {
    start: {type: 'graph.dateTimeTimeZone', nullable: false},
    end: {type: 'graph.dateTimeTimeZone', nullable: false}
  }
} as StructuredTypeConfig<TimeSlot>;
//#endregion