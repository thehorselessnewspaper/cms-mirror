//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { File } from './file.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FileComplexConfig = {
  name: 'file',
  fields: {
    hashes: {type: 'graph.hashes'},
    mimeType: {type: 'Edm.String'},
    processingMetadata: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<File>;
//#endregion