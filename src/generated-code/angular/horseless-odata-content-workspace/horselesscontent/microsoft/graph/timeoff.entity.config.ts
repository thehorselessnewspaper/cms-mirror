//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeOff } from './timeoff.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TimeOffEntityConfig = {
  name: 'timeOff',
  base: 'microsoft.graph.changeTrackedEntity',
  fields: {
    sharedTimeOff: {type: 'graph.timeOffItem'},
    draftTimeOff: {type: 'graph.timeOffItem'},
    userId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TimeOff>;
//#endregion