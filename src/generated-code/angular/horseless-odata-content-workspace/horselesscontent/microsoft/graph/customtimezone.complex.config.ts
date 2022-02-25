//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomTimeZone } from './customtimezone.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CustomTimeZoneComplexConfig = {
  name: 'customTimeZone',
  base: 'microsoft.graph.timeZoneBase',
  fields: {
    bias: {type: 'Edm.Int32'},
    standardOffset: {type: 'graph.standardTimeZoneOffset'},
    daylightOffset: {type: 'graph.daylightTimeZoneOffset'}
  }
} as StructuredTypeConfig<CustomTimeZone>;
//#endregion