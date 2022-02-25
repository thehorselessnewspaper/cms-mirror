//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FileSystemInfo } from './filesysteminfo.complex';
//#endregion

export interface DriveItemUploadableProperties {
  //#region ODataApiGen Properties
  description?: string;
  fileSystemInfo?: FileSystemInfo;
  name?: string;
  //#endregion
}