//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FileEncryptionInfo } from './fileencryptioninfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FileEncryptionInfoComplexConfig = {
  name: 'fileEncryptionInfo',
  fields: {
    encryptionKey: {type: 'Edm.Binary'},
    initializationVector: {type: 'Edm.Binary'},
    mac: {type: 'Edm.Binary'},
    macKey: {type: 'Edm.Binary'},
    profileIdentifier: {type: 'Edm.String'},
    fileDigest: {type: 'Edm.Binary'},
    fileDigestAlgorithm: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<FileEncryptionInfo>;
//#endregion