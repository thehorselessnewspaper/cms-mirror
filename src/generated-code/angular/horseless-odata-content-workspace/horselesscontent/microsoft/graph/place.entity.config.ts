//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Place } from './place.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlaceEntityConfig = {
  name: 'place',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    geoCoordinates: {type: 'graph.outlookGeoCoordinates'},
    phone: {type: 'Edm.String'},
    address: {type: 'graph.physicalAddress'}
  }
} as StructuredTypeConfig<Place>;
//#endregion