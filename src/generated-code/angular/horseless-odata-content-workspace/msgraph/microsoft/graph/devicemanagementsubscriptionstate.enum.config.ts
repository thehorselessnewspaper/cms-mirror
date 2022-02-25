//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementSubscriptionState } from './devicemanagementsubscriptionstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceManagementSubscriptionStateConfig = {
  name: 'deviceManagementSubscriptionState',
  members: DeviceManagementSubscriptionState,
  fields: {
    pending: {value: 0},
    active: {value: 1},
    warning: {value: 2},
    disabled: {value: 3},
    deleted: {value: 4},
    blocked: {value: 5},
    lockedOut: {value: 8}
  }
} as EnumTypeConfig<DeviceManagementSubscriptionState>;
//#endregion