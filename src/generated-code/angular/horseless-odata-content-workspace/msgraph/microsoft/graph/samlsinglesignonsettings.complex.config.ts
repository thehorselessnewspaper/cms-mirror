//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SamlSingleSignOnSettings } from './samlsinglesignonsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SamlSingleSignOnSettingsComplexConfig = {
  name: 'samlSingleSignOnSettings',
  fields: {
    relayState: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SamlSingleSignOnSettings>;
//#endregion