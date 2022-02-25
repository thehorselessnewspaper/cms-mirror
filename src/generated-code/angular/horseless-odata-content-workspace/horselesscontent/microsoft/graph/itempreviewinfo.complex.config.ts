//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ItemPreviewInfo } from './itempreviewinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ItemPreviewInfoComplexConfig = {
  name: 'itemPreviewInfo',
  fields: {
    getUrl: {type: 'Edm.String'},
    postParameters: {type: 'Edm.String'},
    postUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ItemPreviewInfo>;
//#endregion