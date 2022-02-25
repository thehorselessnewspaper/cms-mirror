//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppIdentity } from './appidentity.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AppIdentityComplexConfig = {
  name: 'appIdentity',
  fields: {
    appId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    servicePrincipalId: {type: 'Edm.String'},
    servicePrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AppIdentity>;
//#endregion