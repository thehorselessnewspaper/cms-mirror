//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbooksService } from './workbooks.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const WorkbooksServiceEntitySetConfig = {
  name: 'workbooks',
  entityType: 'microsoft.graph.driveItem',
  service: WorkbooksService
} as EntitySetConfig;
//#endregion