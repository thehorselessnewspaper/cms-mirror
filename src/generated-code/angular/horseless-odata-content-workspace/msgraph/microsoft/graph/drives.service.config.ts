//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DrivesService } from './drives.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DrivesServiceEntitySetConfig = {
  name: 'drives',
  entityType: 'microsoft.graph.drive',
  service: DrivesService
} as EntitySetConfig;
//#endregion