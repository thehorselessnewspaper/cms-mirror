//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Shift } from './shift.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ShiftEntityConfig = {
  name: 'shift',
  base: 'microsoft.graph.changeTrackedEntity',
  fields: {
    sharedShift: {type: 'graph.shiftItem'},
    draftShift: {type: 'graph.shiftItem'},
    userId: {type: 'Edm.String'},
    schedulingGroupId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Shift>;
//#endregion