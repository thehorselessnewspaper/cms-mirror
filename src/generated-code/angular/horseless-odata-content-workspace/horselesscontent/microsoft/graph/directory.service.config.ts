//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryService } from './directory.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DirectoryServiceEntitySetConfig = {
  name: 'directory',
  entityType: 'microsoft.graph.directory',
  service: DirectoryService
} as EntitySetConfig;
//#endregion