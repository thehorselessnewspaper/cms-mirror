//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObjectsService } from './directoryobjects.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DirectoryObjectsServiceEntitySetConfig = {
  name: 'directoryObjects',
  entityType: 'microsoft.graph.directoryObject',
  service: DirectoryObjectsService
} as EntitySetConfig;
//#endregion