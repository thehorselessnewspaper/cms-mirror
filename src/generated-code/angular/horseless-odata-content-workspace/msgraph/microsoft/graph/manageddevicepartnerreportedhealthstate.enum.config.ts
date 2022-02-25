//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedDevicePartnerReportedHealthState } from './manageddevicepartnerreportedhealthstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagedDevicePartnerReportedHealthStateConfig = {
  name: 'managedDevicePartnerReportedHealthState',
  members: ManagedDevicePartnerReportedHealthState,
  fields: {
    unknown: {value: 0},
    activated: {value: 1},
    deactivated: {value: 2},
    secured: {value: 3},
    lowSeverity: {value: 4},
    mediumSeverity: {value: 5},
    highSeverity: {value: 6},
    unresponsive: {value: 7},
    compromised: {value: 8},
    misconfigured: {value: 9}
  }
} as EnumTypeConfig<ManagedDevicePartnerReportedHealthState>;
//#endregion