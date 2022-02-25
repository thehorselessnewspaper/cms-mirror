//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PasswordCredential } from './passwordcredential.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PasswordCredentialComplexConfig = {
  name: 'passwordCredential',
  fields: {
    customKeyIdentifier: {type: 'Edm.Binary'},
    displayName: {type: 'Edm.String'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    keyId: {type: 'Edm.Guid'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    secretText: {type: 'Edm.String'},
    hint: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PasswordCredential>;
//#endregion