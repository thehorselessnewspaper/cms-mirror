//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OptionalClaim } from './optionalclaim.complex';
//#endregion

export interface OptionalClaims {
  //#region ODataApiGen Properties
  idToken?: OptionalClaim[];
  accessToken?: OptionalClaim[];
  saml2Token?: OptionalClaim[];
  //#endregion
}