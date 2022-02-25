//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DefaultColumnValue } from './defaultcolumnvalue.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DefaultColumnValueComplexConfig = {
  name: 'defaultColumnValue',
  fields: {
    formula: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DefaultColumnValue>;
//#endregion