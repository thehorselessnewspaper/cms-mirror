//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementPartnerAppType } from './devicemanagementpartnerapptype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceManagementPartnerAppTypeConfig = {
  name: 'deviceManagementPartnerAppType',
  members: DeviceManagementPartnerAppType,
  fields: {
    unknown: {value: 0},
    singleTenantApp: {value: 1},
    multiTenantApp: {value: 2}
  }
} as EnumTypeConfig<DeviceManagementPartnerAppType>;
//#endregion