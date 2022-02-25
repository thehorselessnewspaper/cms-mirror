//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceComplianceDeviceStatus } from './devicecompliancedevicestatus.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceComplianceDeviceStatusEntityConfig = {
  name: 'deviceComplianceDeviceStatus',
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
} as StructuredTypeConfig<DeviceComplianceDeviceStatus>;
//#endregion