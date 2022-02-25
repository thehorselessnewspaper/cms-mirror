//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementExchangeConnectorStatus } from './devicemanagementexchangeconnectorstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceManagementExchangeConnectorStatusConfig = {
  name: 'deviceManagementExchangeConnectorStatus',
  members: DeviceManagementExchangeConnectorStatus,
  fields: {
    none: {value: 0},
    connectionPending: {value: 1},
    connected: {value: 2},
    disconnected: {value: 3}
  }
} as EnumTypeConfig<DeviceManagementExchangeConnectorStatus>;
//#endregion