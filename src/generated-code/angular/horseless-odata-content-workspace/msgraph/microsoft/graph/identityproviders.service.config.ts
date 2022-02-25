//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentityProvidersService } from './identityproviders.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const IdentityProvidersServiceEntitySetConfig = {
  name: 'identityProviders',
  entityType: 'microsoft.graph.identityProvider',
  service: IdentityProvidersService
} as EntitySetConfig;
//#endregion