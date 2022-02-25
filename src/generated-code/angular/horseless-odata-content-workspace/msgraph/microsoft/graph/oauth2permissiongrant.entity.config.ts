//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OAuth2PermissionGrantEntityConfig = {
  name: 'oAuth2PermissionGrant',
  base: 'microsoft.graph.entity',
  fields: {
    clientId: {type: 'Edm.String', nullable: false},
    consentType: {type: 'Edm.String'},
    principalId: {type: 'Edm.String'},
    resourceId: {type: 'Edm.String', nullable: false},
    scope: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OAuth2PermissionGrant>;
//#endregion