//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ApiApplication } from './apiapplication.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ApiApplicationComplexConfig = {
  name: 'apiApplication',
  fields: {
    acceptMappedClaims: {type: 'Edm.Boolean'},
    knownClientApplications: {type: 'Edm.Guid', collection: true},
    preAuthorizedApplications: {type: 'graph.preAuthorizedApplication', collection: true},
    requestedAccessTokenVersion: {type: 'Edm.Int32'},
    oauth2PermissionScopes: {type: 'graph.permissionScope', nullable: false, collection: true}
  }
} as StructuredTypeConfig<ApiApplication>;
//#endregion