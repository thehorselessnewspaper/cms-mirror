//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AlternativeSecurityId } from './alternativesecurityid.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AlternativeSecurityIdComplexConfig = {
  name: 'alternativeSecurityId',
  fields: {
    type: {type: 'Edm.Int32'},
    identityProvider: {type: 'Edm.String'},
    key: {type: 'Edm.Binary'}
  }
} as StructuredTypeConfig<AlternativeSecurityId>;
//#endregion