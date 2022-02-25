//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeOffItem } from './timeoffitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TimeOffItemComplexConfig = {
  name: 'timeOffItem',
  base: 'microsoft.graph.scheduleEntity',
  fields: {
    timeOffReasonId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TimeOffItem>;
//#endregion