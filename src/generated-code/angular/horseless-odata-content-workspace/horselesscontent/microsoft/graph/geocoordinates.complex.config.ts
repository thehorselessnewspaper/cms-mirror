//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GeoCoordinates } from './geocoordinates.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const GeoCoordinatesComplexConfig = {
  name: 'geoCoordinates',
  fields: {
    altitude: {type: 'Edm.Double'},
    latitude: {type: 'Edm.Double'},
    longitude: {type: 'Edm.Double'}
  }
} as StructuredTypeConfig<GeoCoordinates>;
//#endregion