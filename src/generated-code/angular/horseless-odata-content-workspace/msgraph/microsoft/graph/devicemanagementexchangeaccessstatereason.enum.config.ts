//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementExchangeAccessStateReason } from './devicemanagementexchangeaccessstatereason.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceManagementExchangeAccessStateReasonConfig = {
  name: 'deviceManagementExchangeAccessStateReason',
  members: DeviceManagementExchangeAccessStateReason,
  fields: {
    none: {value: 0},
    unknown: {value: 1},
    exchangeGlobalRule: {value: 2},
    exchangeIndividualRule: {value: 3},
    exchangeDeviceRule: {value: 4},
    exchangeUpgrade: {value: 5},
    exchangeMailboxPolicy: {value: 6},
    other: {value: 7},
    compliant: {value: 8},
    notCompliant: {value: 9},
    notEnrolled: {value: 10},
    unknownLocation: {value: 12},
    mfaRequired: {value: 13},
    azureADBlockDueToAccessPolicy: {value: 14},
    compromisedPassword: {value: 15},
    deviceNotKnownWithManagedApp: {value: 16}
  }
} as EnumTypeConfig<DeviceManagementExchangeAccessStateReason>;
//#endregion