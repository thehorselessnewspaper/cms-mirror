﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Location } from './location.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LocationComplexConfig = {
  name: 'location',
  fields: {
    displayName: {type: 'Edm.String'},
    locationEmailAddress: {type: 'Edm.String'},
    address: {type: 'graph.physicalAddress'},
    locationUri: {type: 'Edm.String'},
    coordinates: {type: 'graph.outlookGeoCoordinates'},
    locationType: {type: 'graph.locationType'},
    uniqueId: {type: 'Edm.String'},
    uniqueIdType: {type: 'graph.locationUniqueIdType'}
  }
} as StructuredTypeConfig<Location>;
//#endregion