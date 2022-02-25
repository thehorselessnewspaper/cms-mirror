//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NumberColumn } from './numbercolumn.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const NumberColumnComplexConfig = {
  name: 'numberColumn',
  fields: {
    decimalPlaces: {type: 'Edm.String'},
    displayAs: {type: 'Edm.String'},
    maximum: {type: 'Edm.Double'},
    minimum: {type: 'Edm.Double'}
  }
} as StructuredTypeConfig<NumberColumn>;
//#endregion