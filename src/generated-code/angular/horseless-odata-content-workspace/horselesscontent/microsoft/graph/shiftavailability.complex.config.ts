//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ShiftAvailability } from './shiftavailability.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ShiftAvailabilityComplexConfig = {
  name: 'shiftAvailability',
  fields: {
    recurrence: {type: 'graph.patternedRecurrence'},
    timeZone: {type: 'Edm.String'},
    timeSlots: {type: 'graph.timeRange', collection: true}
  }
} as StructuredTypeConfig<ShiftAvailability>;
//#endregion