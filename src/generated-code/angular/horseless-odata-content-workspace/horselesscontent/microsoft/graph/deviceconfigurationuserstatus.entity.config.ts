//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfigurationUserStatus } from './deviceconfigurationuserstatus.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceConfigurationUserStatusEntityConfig = {
  name: 'deviceConfigurationUserStatus',
  base: 'microsoft.graph.entity',
  fields: {
    userDisplayName: {type: 'Edm.String'},
    devicesCount: {type: 'Edm.Int32', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceConfigurationUserStatus>;
//#endregion