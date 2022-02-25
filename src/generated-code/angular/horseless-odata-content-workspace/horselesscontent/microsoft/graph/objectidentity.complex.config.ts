//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ObjectIdentity } from './objectidentity.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ObjectIdentityComplexConfig = {
  name: 'objectIdentity',
  fields: {
    signInType: {type: 'Edm.String'},
    issuer: {type: 'Edm.String'},
    issuerAssignedId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ObjectIdentity>;
//#endregion