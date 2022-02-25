//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfigurationDeviceStatus } from './deviceconfigurationdevicestatus.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceConfigurationDeviceStatusEntityConfig = {
  name: 'deviceConfigurationDeviceStatus',
  base: 'microsoft.graph.entity',
  fields: {
    deviceDisplayName: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    deviceModel: {type: 'Edm.String'},
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceConfigurationDeviceStatus>;
//#endregion