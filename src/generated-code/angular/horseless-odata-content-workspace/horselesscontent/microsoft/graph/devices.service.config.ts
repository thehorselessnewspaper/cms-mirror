//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DevicesService } from './devices.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DevicesServiceEntitySetConfig = {
  name: 'devices',
  entityType: 'microsoft.graph.device',
  service: DevicesService
} as EntitySetConfig;
//#endregion