//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContentTypeOrder } from './contenttypeorder.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ContentTypeOrderComplexConfig = {
  name: 'contentTypeOrder',
  fields: {
    default: {type: 'Edm.Boolean'},
    position: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<ContentTypeOrder>;
//#endregion