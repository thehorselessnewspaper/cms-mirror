//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SizeRange } from './sizerange.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SizeRangeComplexConfig = {
  name: 'sizeRange',
  fields: {
    minimumSize: {type: 'Edm.Int32'},
    maximumSize: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<SizeRange>;
//#endregion