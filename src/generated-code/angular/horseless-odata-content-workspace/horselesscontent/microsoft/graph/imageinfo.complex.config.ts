//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ImageInfo } from './imageinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ImageInfoComplexConfig = {
  name: 'imageInfo',
  fields: {
    iconUrl: {type: 'Edm.String'},
    alternativeText: {type: 'Edm.String'},
    alternateText: {type: 'Edm.String'},
    addImageQuery: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<ImageInfo>;
//#endregion