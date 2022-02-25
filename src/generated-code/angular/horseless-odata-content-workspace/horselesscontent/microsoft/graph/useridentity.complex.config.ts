//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserIdentity } from './useridentity.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UserIdentityComplexConfig = {
  name: 'userIdentity',
  fields: {
    id: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    ipAddress: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<UserIdentity>;
//#endregion