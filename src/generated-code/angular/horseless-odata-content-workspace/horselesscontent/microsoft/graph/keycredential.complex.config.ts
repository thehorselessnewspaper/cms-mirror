//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { KeyCredential } from './keycredential.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const KeyCredentialComplexConfig = {
  name: 'keyCredential',
  fields: {
    customKeyIdentifier: {type: 'Edm.Binary'},
    displayName: {type: 'Edm.String'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    keyId: {type: 'Edm.Guid'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    type: {type: 'Edm.String'},
    usage: {type: 'Edm.String'},
    key: {type: 'Edm.Binary'}
  }
} as StructuredTypeConfig<KeyCredential>;
//#endregion