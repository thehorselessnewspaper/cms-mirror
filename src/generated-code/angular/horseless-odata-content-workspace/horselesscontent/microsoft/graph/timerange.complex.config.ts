//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeRange } from './timerange.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TimeRangeComplexConfig = {
  name: 'timeRange',
  fields: {
    startTime: {type: 'Edm.TimeOfDay'},
    endTime: {type: 'Edm.TimeOfDay'}
  }
} as StructuredTypeConfig<TimeRange>;
//#endregion