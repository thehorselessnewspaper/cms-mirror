//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharesService } from './shares.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SharesServiceEntitySetConfig = {
  name: 'shares',
  entityType: 'microsoft.graph.sharedDriveItem',
  service: SharesService
} as EntitySetConfig;
//#endregion