//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainsService } from './domains.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DomainsServiceEntitySetConfig = {
  name: 'domains',
  entityType: 'microsoft.graph.domain',
  service: DomainsService
} as EntitySetConfig;
//#endregion