//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SignInLocation } from './signinlocation.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SignInLocationComplexConfig = {
  name: 'signInLocation',
  fields: {
    city: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    countryOrRegion: {type: 'Edm.String'},
    geoCoordinates: {type: 'graph.geoCoordinates'}
  }
} as StructuredTypeConfig<SignInLocation>;
//#endregion