//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OutlookGeoCoordinates } from './outlookgeocoordinates.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OutlookGeoCoordinatesComplexConfig = {
  name: 'outlookGeoCoordinates',
  fields: {
    latitude: {type: 'Edm.Double'},
    longitude: {type: 'Edm.Double'},
    accuracy: {type: 'Edm.Double'},
    altitude: {type: 'Edm.Double'},
    altitudeAccuracy: {type: 'Edm.Double'}
  }
} as StructuredTypeConfig<OutlookGeoCoordinates>;
//#endregion