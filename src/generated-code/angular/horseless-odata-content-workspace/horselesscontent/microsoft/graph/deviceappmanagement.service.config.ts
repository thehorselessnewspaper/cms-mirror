//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceAppManagementService } from './deviceappmanagement.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DeviceAppManagementServiceEntitySetConfig = {
  name: 'deviceAppManagement',
  entityType: 'microsoft.graph.deviceAppManagement',
  service: DeviceAppManagementService
} as EntitySetConfig;
//#endregion