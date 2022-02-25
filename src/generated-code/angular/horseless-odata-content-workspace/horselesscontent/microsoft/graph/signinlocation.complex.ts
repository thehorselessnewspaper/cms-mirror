//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GeoCoordinates } from './geocoordinates.complex';
//#endregion

export interface SignInLocation {
  //#region ODataApiGen Properties
  city?: string;
  state?: string;
  countryOrRegion?: string;
  geoCoordinates?: GeoCoordinates;
  //#endregion
}