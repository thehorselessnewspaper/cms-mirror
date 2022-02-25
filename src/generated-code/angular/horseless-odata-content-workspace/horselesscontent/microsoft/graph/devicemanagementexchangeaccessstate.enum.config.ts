//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementExchangeAccessState } from './devicemanagementexchangeaccessstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceManagementExchangeAccessStateConfig = {
  name: 'deviceManagementExchangeAccessState',
  members: DeviceManagementExchangeAccessState,
  fields: {
    none: {value: 0},
    unknown: {value: 1},
    allowed: {value: 2},
    blocked: {value: 3},
    quarantined: {value: 4}
  }
} as EnumTypeConfig<DeviceManagementExchangeAccessState>;
//#endregion