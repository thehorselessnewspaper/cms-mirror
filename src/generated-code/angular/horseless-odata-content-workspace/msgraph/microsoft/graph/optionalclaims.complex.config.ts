//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OptionalClaims } from './optionalclaims.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OptionalClaimsComplexConfig = {
  name: 'optionalClaims',
  fields: {
    idToken: {type: 'graph.optionalClaim', collection: true},
    accessToken: {type: 'graph.optionalClaim', collection: true},
    saml2Token: {type: 'graph.optionalClaim', collection: true}
  }
} as StructuredTypeConfig<OptionalClaims>;
//#endregion