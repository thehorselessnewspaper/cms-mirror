//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementExchangeConnectorType } from './devicemanagementexchangeconnectortype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceManagementExchangeConnectorTypeConfig = {
  name: 'deviceManagementExchangeConnectorType',
  members: DeviceManagementExchangeConnectorType,
  fields: {
    onPremises: {value: 0},
    hosted: {value: 1},
    serviceToService: {value: 2},
    dedicated: {value: 3}
  }
} as EnumTypeConfig<DeviceManagementExchangeConnectorType>;
//#endregion