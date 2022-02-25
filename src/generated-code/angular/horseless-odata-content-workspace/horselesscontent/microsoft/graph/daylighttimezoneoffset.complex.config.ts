//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DaylightTimeZoneOffset } from './daylighttimezoneoffset.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DaylightTimeZoneOffsetComplexConfig = {
  name: 'daylightTimeZoneOffset',
  base: 'microsoft.graph.standardTimeZoneOffset',
  fields: {
    daylightBias: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<DaylightTimeZoneOffset>;
//#endregion