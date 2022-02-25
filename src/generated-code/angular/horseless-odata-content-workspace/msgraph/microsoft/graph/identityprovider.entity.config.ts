//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentityProvider } from './identityprovider.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IdentityProviderEntityConfig = {
  name: 'identityProvider',
  base: 'microsoft.graph.entity',
  fields: {
    type: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    clientId: {type: 'Edm.String'},
    clientSecret: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IdentityProvider>;
//#endregion