//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ShiftItem } from './shiftitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ShiftItemComplexConfig = {
  name: 'shiftItem',
  base: 'microsoft.graph.scheduleEntity',
  fields: {
    displayName: {type: 'Edm.String'},
    notes: {type: 'Edm.String'},
    activities: {type: 'graph.shiftActivity', collection: true}
  }
} as StructuredTypeConfig<ShiftItem>;
//#endregion