//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FileHash } from './filehash.complex';
//#endregion

export interface FileSecurityState {
  //#region ODataApiGen Properties
  fileHash?: FileHash;
  name?: string;
  path?: string;
  riskScore?: string;
  //#endregion
}