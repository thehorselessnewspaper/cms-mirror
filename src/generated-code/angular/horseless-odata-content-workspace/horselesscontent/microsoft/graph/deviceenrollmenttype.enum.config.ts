//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceEnrollmentTypeConfig = {
  name: 'deviceEnrollmentType',
  members: DeviceEnrollmentType,
  fields: {
    unknown: {value: 0},
    userEnrollment: {value: 1},
    deviceEnrollmentManager: {value: 2},
    appleBulkWithUser: {value: 3},
    appleBulkWithoutUser: {value: 4},
    windowsAzureADJoin: {value: 5},
    windowsBulkUserless: {value: 6},
    windowsAutoEnrollment: {value: 7},
    windowsBulkAzureDomainJoin: {value: 8},
    windowsCoManagement: {value: 9}
  }
} as EnumTypeConfig<DeviceEnrollmentType>;
//#endregion