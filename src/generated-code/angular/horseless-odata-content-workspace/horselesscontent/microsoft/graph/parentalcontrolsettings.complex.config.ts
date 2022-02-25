//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ParentalControlSettings } from './parentalcontrolsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ParentalControlSettingsComplexConfig = {
  name: 'parentalControlSettings',
  fields: {
    countriesBlockedForMinors: {type: 'Edm.String', collection: true},
    legalAgeGroupRule: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ParentalControlSettings>;
//#endregion