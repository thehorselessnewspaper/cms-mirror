//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Hashes } from './hashes.complex';
//#endregion

export interface File {
  //#region ODataApiGen Properties
  hashes?: Hashes;
  mimeType?: string;
  processingMetadata?: boolean;
  //#endregion
}