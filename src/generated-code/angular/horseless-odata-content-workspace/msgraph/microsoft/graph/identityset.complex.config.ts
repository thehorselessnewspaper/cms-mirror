//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IdentitySetComplexConfig = {
  name: 'identitySet',
  open: true,
  fields: {
    application: {type: 'graph.identity'},
    device: {type: 'graph.identity'},
    user: {type: 'graph.identity'}
  }
} as StructuredTypeConfig<IdentitySet>;
//#endregion