//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementExchangeConnector } from './devicemanagementexchangeconnector.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceManagementExchangeConnectorEntityConfig = {
  name: 'deviceManagementExchangeConnector',
  base: 'microsoft.graph.entity',
  fields: {
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.deviceManagementExchangeConnectorStatus', nullable: false},
    primarySmtpAddress: {type: 'Edm.String'},
    serverName: {type: 'Edm.String'},
    connectorServerName: {type: 'Edm.String'},
    exchangeConnectorType: {type: 'graph.deviceManagementExchangeConnectorType', nullable: false},
    version: {type: 'Edm.String'},
    exchangeAlias: {type: 'Edm.String'},
    exchangeOrganization: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceManagementExchangeConnector>;
//#endregion