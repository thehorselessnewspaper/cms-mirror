//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SignInStatus } from './signinstatus.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SignInStatusComplexConfig = {
  name: 'signInStatus',
  fields: {
    errorCode: {type: 'Edm.Int32'},
    failureReason: {type: 'Edm.String'},
    additionalDetails: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SignInStatus>;
//#endregion