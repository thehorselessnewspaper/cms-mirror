//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SitesService } from './sites.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SitesServiceEntitySetConfig = {
  name: 'sites',
  entityType: 'microsoft.graph.site',
  service: SitesService
} as EntitySetConfig;
//#endregion