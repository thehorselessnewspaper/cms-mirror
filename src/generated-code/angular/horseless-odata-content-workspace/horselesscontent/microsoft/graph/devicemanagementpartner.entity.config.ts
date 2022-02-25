//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementPartner } from './devicemanagementpartner.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceManagementPartnerEntityConfig = {
  name: 'deviceManagementPartner',
  base: 'microsoft.graph.entity',
  fields: {
    lastHeartbeatDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    partnerState: {type: 'graph.deviceManagementPartnerTenantState', nullable: false},
    partnerAppType: {type: 'graph.deviceManagementPartnerAppType', nullable: false},
    singleTenantAppId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    isConfigured: {type: 'Edm.Boolean', nullable: false},
    whenPartnerDevicesWillBeRemovedDateTime: {type: 'Edm.DateTimeOffset'},
    whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<DeviceManagementPartner>;
//#endregion