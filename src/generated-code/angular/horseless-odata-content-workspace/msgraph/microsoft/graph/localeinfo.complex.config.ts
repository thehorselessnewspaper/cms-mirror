//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocaleInfo } from './localeinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LocaleInfoComplexConfig = {
  name: 'localeInfo',
  fields: {
    locale: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<LocaleInfo>;
//#endregion