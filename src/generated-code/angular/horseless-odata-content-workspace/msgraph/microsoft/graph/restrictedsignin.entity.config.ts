//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RestrictedSignIn } from './restrictedsignin.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RestrictedSignInEntityConfig = {
  name: 'restrictedSignIn',
  base: 'microsoft.graph.signIn',
  fields: {
    targetTenantId: {type: 'Edm.Guid'}
  }
} as StructuredTypeConfig<RestrictedSignIn>;
//#endregion