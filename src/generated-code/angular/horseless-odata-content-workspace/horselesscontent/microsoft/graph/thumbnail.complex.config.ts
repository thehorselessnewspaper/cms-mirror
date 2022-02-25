//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Thumbnail } from './thumbnail.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ThumbnailComplexConfig = {
  name: 'thumbnail',
  fields: {
    content: {type: 'Edm.Stream'},
    height: {type: 'Edm.Int32'},
    sourceItemId: {type: 'Edm.String'},
    url: {type: 'Edm.String'},
    width: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<Thumbnail>;
//#endregion