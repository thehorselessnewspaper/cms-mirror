//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CurrencyColumn } from './currencycolumn.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CurrencyColumnComplexConfig = {
  name: 'currencyColumn',
  fields: {
    locale: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<CurrencyColumn>;
//#endregion