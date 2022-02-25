//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Permission } from './permission.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PermissionEntityConfig = {
  name: 'permission',
  base: 'microsoft.graph.entity',
  fields: {
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    grantedTo: {type: 'graph.identitySet'},
    grantedToIdentities: {type: 'graph.identitySet', collection: true},
    hasPassword: {type: 'Edm.Boolean'},
    inheritedFrom: {type: 'graph.itemReference'},
    invitation: {type: 'graph.sharingInvitation'},
    link: {type: 'graph.sharingLink'},
    roles: {type: 'Edm.String', collection: true},
    shareId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Permission>;
//#endregion