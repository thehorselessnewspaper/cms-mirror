//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DeviceManagementPartnerTenantState } from './devicemanagementpartnertenantstate.enum';
import { DeviceManagementPartnerAppType } from './devicemanagementpartnerapptype.enum';
//#endregion

export interface DeviceManagementPartner extends Entity {
  //#region ODataApiGen Properties
  lastHeartbeatDateTime: Date;
  partnerState: DeviceManagementPartnerTenantState;
  partnerAppType: DeviceManagementPartnerAppType;
  singleTenantAppId?: string;
  displayName?: string;
  isConfigured: boolean;
  whenPartnerDevicesWillBeRemovedDateTime?: Date;
  whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?: Date;
  //#endregion
}