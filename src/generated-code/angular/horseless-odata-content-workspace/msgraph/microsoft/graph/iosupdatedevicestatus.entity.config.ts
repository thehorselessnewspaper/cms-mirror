//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosUpdateDeviceStatus } from './iosupdatedevicestatus.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosUpdateDeviceStatusEntityConfig = {
  name: 'iosUpdateDeviceStatus',
  base: 'microsoft.graph.entity',
  fields: {
    installStatus: {type: 'graph.iosUpdatesInstallStatus', nullable: false},
    osVersion: {type: 'Edm.String'},
    deviceId: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    deviceDisplayName: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    deviceModel: {type: 'Edm.String'},
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosUpdateDeviceStatus>;
//#endregion