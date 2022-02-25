//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

export interface FileEncryptionInfo {
  //#region ODataApiGen Properties
  encryptionKey?: ArrayBuffer;
  initializationVector?: ArrayBuffer;
  mac?: ArrayBuffer;
  macKey?: ArrayBuffer;
  profileIdentifier?: string;
  fileDigest?: ArrayBuffer;
  fileDigestAlgorithm?: string;
  //#endregion
}