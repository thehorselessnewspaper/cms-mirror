//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocationType } from './locationtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const LocationTypeConfig = {
  name: 'locationType',
  members: LocationType,
  fields: {
    default: {value: 0},
    conferenceRoom: {value: 1},
    homeAddress: {value: 2},
    businessAddress: {value: 3},
    geoCoordinates: {value: 4},
    streetAddress: {value: 5},
    hotel: {value: 6},
    restaurant: {value: 7},
    localBusiness: {value: 8},
    postalAddress: {value: 9}
  }
} as EnumTypeConfig<LocationType>;
//#endregion