//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalculatedColumn } from './calculatedcolumn.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CalculatedColumnComplexConfig = {
  name: 'calculatedColumn',
  fields: {
    format: {type: 'Edm.String'},
    formula: {type: 'Edm.String'},
    outputType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<CalculatedColumn>;
//#endregion