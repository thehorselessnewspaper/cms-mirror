//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementExchangeConnectorSyncType } from './devicemanagementexchangeconnectorsynctype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceManagementExchangeConnectorSyncTypeConfig = {
  name: 'deviceManagementExchangeConnectorSyncType',
  members: DeviceManagementExchangeConnectorSyncType,
  fields: {
    fullSync: {value: 0},
    deltaSync: {value: 1}
  }
} as EnumTypeConfig<DeviceManagementExchangeConnectorSyncType>;
//#endregion