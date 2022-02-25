//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ItemBody } from './itembody.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ItemBodyComplexConfig = {
  name: 'itemBody',
  fields: {
    contentType: {type: 'graph.bodyType'},
    content: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ItemBody>;
//#endregion