//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SecurityService } from './security.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SecurityServiceEntitySetConfig = {
  name: 'Security',
  entityType: 'microsoft.graph.security',
  service: SecurityService
} as EntitySetConfig;
//#endregion