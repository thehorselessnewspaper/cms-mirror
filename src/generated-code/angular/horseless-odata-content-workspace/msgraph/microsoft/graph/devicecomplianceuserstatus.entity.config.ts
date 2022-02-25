//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceComplianceUserStatus } from './devicecomplianceuserstatus.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceComplianceUserStatusEntityConfig = {
  name: 'deviceComplianceUserStatus',
  base: 'microsoft.graph.entity',
  fields: {
    userDisplayName: {type: 'Edm.String'},
    devicesCount: {type: 'Edm.Int32', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceComplianceUserStatus>;
//#endregion