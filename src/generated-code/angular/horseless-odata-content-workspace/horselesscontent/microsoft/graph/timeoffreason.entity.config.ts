//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeOffReason } from './timeoffreason.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TimeOffReasonEntityConfig = {
  name: 'timeOffReason',
  base: 'microsoft.graph.changeTrackedEntity',
  fields: {
    displayName: {type: 'Edm.String'},
    iconType: {type: 'graph.timeOffReasonIconType'},
    isActive: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TimeOffReason>;
//#endregion