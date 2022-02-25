//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Hashes } from './hashes.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const HashesComplexConfig = {
  name: 'hashes',
  fields: {
    crc32Hash: {type: 'Edm.String'},
    quickXorHash: {type: 'Edm.String'},
    sha1Hash: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Hashes>;
//#endregion