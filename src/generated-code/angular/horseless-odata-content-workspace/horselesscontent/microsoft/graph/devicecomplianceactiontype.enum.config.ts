//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceComplianceActionType } from './devicecomplianceactiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceComplianceActionTypeConfig = {
  name: 'deviceComplianceActionType',
  members: DeviceComplianceActionType,
  fields: {
    noAction: {value: 0},
    notification: {value: 1},
    block: {value: 2},
    retire: {value: 3},
    wipe: {value: 4},
    removeResourceAccessProfiles: {value: 5},
    pushNotification: {value: 9}
  }
} as EnumTypeConfig<DeviceComplianceActionType>;
//#endregion