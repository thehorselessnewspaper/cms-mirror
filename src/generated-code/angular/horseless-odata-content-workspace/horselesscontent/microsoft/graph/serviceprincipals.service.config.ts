//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ServicePrincipalsService } from './serviceprincipals.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ServicePrincipalsServiceEntitySetConfig = {
  name: 'servicePrincipals',
  entityType: 'microsoft.graph.servicePrincipal',
  service: ServicePrincipalsService
} as EntitySetConfig;
//#endregion