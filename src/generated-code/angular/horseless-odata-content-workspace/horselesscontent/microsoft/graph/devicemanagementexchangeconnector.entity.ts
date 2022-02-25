//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DeviceManagementExchangeConnectorStatus } from './devicemanagementexchangeconnectorstatus.enum';
import { DeviceManagementExchangeConnectorType } from './devicemanagementexchangeconnectortype.enum';
//#endregion

export interface DeviceManagementExchangeConnector extends Entity {
  //#region ODataApiGen Properties
  lastSyncDateTime: Date;
  status: DeviceManagementExchangeConnectorStatus;
  primarySmtpAddress?: string;
  serverName?: string;
  connectorServerName?: string;
  exchangeConnectorType: DeviceManagementExchangeConnectorType;
  version?: string;
  exchangeAlias?: string;
  exchangeOrganization?: string;
  //#endregion
}