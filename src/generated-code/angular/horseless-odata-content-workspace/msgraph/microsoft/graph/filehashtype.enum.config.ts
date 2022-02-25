//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FileHashType } from './filehashtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const FileHashTypeConfig = {
  name: 'fileHashType',
  members: FileHashType,
  fields: {
    unknown: {value: 0},
    sha1: {value: 1},
    sha256: {value: 2},
    md5: {value: 3},
    authenticodeHash256: {value: 4},
    lsHash: {value: 5},
    ctph: {value: 6},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<FileHashType>;
//#endregion