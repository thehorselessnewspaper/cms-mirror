//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementService } from './devicemanagement.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DeviceManagementServiceEntitySetConfig = {
  name: 'deviceManagement',
  entityType: 'microsoft.graph.deviceManagement',
  service: DeviceManagementService
} as EntitySetConfig;
//#endregion