//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FileHashType } from './filehashtype.enum';
//#endregion

export interface FileHash {
  //#region ODataApiGen Properties
  hashType?: FileHashType;
  hashValue?: string;
  //#endregion
}