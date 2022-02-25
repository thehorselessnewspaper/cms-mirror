//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DateTimeColumn } from './datetimecolumn.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DateTimeColumnComplexConfig = {
  name: 'dateTimeColumn',
  fields: {
    displayAs: {type: 'Edm.String'},
    format: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DateTimeColumn>;
//#endregion