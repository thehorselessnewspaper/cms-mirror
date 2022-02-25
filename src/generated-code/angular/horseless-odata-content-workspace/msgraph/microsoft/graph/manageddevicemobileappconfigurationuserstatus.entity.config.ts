//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedDeviceMobileAppConfigurationUserStatus } from './manageddevicemobileappconfigurationuserstatus.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedDeviceMobileAppConfigurationUserStatusEntityConfig = {
  name: 'managedDeviceMobileAppConfigurationUserStatus',
  base: 'microsoft.graph.entity',
  fields: {
    userDisplayName: {type: 'Edm.String'},
    devicesCount: {type: 'Edm.Int32', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedDeviceMobileAppConfigurationUserStatus>;
//#endregion