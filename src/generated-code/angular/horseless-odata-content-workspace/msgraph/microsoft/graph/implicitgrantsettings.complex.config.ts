//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ImplicitGrantSettings } from './implicitgrantsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ImplicitGrantSettingsComplexConfig = {
  name: 'implicitGrantSettings',
  fields: {
    enableIdTokenIssuance: {type: 'Edm.Boolean'},
    enableAccessTokenIssuance: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<ImplicitGrantSettings>;
//#endregion