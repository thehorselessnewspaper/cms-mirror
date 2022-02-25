//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlacesService } from './places.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PlacesServiceEntitySetConfig = {
  name: 'places',
  entityType: 'microsoft.graph.place',
  service: PlacesService
} as EntitySetConfig;
//#endregion