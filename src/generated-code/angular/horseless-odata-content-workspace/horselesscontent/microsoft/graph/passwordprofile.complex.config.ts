//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PasswordProfile } from './passwordprofile.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PasswordProfileComplexConfig = {
  name: 'passwordProfile',
  fields: {
    password: {type: 'Edm.String'},
    forceChangePasswordNextSignIn: {type: 'Edm.Boolean'},
    forceChangePasswordNextSignInWithMfa: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<PasswordProfile>;
//#endregion