//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Identity } from './identity.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IdentityComplexConfig = {
  name: 'identity',
  open: true,
  fields: {
    displayName: {type: 'Edm.String'},
    id: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Identity>;
//#endregion