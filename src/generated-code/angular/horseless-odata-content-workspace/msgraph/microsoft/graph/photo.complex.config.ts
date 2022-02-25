//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Photo } from './photo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PhotoComplexConfig = {
  name: 'photo',
  fields: {
    cameraMake: {type: 'Edm.String'},
    cameraModel: {type: 'Edm.String'},
    exposureDenominator: {type: 'Edm.Double'},
    exposureNumerator: {type: 'Edm.Double'},
    fNumber: {type: 'Edm.Double'},
    focalLength: {type: 'Edm.Double'},
    iso: {type: 'Edm.Int32'},
    takenDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<Photo>;
//#endregion