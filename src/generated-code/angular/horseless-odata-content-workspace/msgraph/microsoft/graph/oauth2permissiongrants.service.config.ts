//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Oauth2PermissionGrantsService } from './oauth2permissiongrants.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const Oauth2PermissionGrantsServiceEntitySetConfig = {
  name: 'oauth2PermissionGrants',
  entityType: 'microsoft.graph.oAuth2PermissionGrant',
  service: Oauth2PermissionGrantsService
} as EntitySetConfig;
//#endregion