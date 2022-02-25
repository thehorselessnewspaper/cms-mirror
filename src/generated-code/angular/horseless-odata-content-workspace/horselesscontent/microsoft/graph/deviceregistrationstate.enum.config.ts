//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceRegistrationState } from './deviceregistrationstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceRegistrationStateConfig = {
  name: 'deviceRegistrationState',
  members: DeviceRegistrationState,
  fields: {
    notRegistered: {value: 0},
    registered: {value: 2},
    revoked: {value: 3},
    keyConflict: {value: 4},
    approvalPending: {value: 5},
    certificateReset: {value: 6},
    notRegisteredPendingEnrollment: {value: 7},
    unknown: {value: 8}
  }
} as EnumTypeConfig<DeviceRegistrationState>;
//#endregion