//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementPartnerTenantState } from './devicemanagementpartnertenantstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceManagementPartnerTenantStateConfig = {
  name: 'deviceManagementPartnerTenantState',
  members: DeviceManagementPartnerTenantState,
  fields: {
    unknown: {value: 0},
    unavailable: {value: 1},
    enabled: {value: 2},
    terminated: {value: 3},
    rejected: {value: 4},
    unresponsive: {value: 5}
  }
} as EnumTypeConfig<DeviceManagementPartnerTenantState>;
//#endregion