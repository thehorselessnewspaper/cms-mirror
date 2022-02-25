//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Image } from './image.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ImageComplexConfig = {
  name: 'image',
  fields: {
    height: {type: 'Edm.Int32'},
    width: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<Image>;
//#endregion