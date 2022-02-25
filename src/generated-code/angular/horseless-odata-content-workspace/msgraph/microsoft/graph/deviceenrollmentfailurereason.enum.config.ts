//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceEnrollmentFailureReason } from './deviceenrollmentfailurereason.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceEnrollmentFailureReasonConfig = {
  name: 'deviceEnrollmentFailureReason',
  members: DeviceEnrollmentFailureReason,
  fields: {
    unknown: {value: 0},
    authentication: {value: 1},
    authorization: {value: 2},
    accountValidation: {value: 3},
    userValidation: {value: 4},
    deviceNotSupported: {value: 5},
    inMaintenance: {value: 6},
    badRequest: {value: 7},
    featureNotSupported: {value: 8},
    enrollmentRestrictionsEnforced: {value: 9},
    clientDisconnected: {value: 10},
    userAbandonment: {value: 11}
  }
} as EnumTypeConfig<DeviceEnrollmentFailureReason>;
//#endregion