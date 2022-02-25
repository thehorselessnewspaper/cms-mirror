//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FileHash } from './filehash.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FileHashComplexConfig = {
  name: 'fileHash',
  fields: {
    hashType: {type: 'graph.fileHashType'},
    hashValue: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<FileHash>;
//#endregion