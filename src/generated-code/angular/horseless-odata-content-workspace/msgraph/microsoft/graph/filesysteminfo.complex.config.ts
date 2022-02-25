//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FileSystemInfo } from './filesysteminfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FileSystemInfoComplexConfig = {
  name: 'fileSystemInfo',
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastAccessedDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<FileSystemInfo>;
//#endregion