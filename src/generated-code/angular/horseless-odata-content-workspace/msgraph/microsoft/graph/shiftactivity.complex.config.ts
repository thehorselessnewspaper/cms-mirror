//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ShiftActivity } from './shiftactivity.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ShiftActivityComplexConfig = {
  name: 'shiftActivity',
  fields: {
    isPaid: {type: 'Edm.Boolean'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    code: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    theme: {type: 'graph.scheduleEntityTheme', nullable: false}
  }
} as StructuredTypeConfig<ShiftActivity>;
//#endregion