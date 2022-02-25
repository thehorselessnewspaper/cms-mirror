//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ShiftPreferences } from './shiftpreferences.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ShiftPreferencesEntityConfig = {
  name: 'shiftPreferences',
  base: 'microsoft.graph.changeTrackedEntity',
  fields: {
    availability: {type: 'graph.shiftAvailability', collection: true}
  }
} as StructuredTypeConfig<ShiftPreferences>;
//#endregion