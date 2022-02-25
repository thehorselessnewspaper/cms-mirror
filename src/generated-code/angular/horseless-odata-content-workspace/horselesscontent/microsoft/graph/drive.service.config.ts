//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DriveService } from './drive.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DriveServiceEntitySetConfig = {
  name: 'drive',
  entityType: 'microsoft.graph.drive',
  service: DriveService
} as EntitySetConfig;
//#endregion