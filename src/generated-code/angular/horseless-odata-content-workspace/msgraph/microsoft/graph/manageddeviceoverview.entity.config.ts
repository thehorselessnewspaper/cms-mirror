//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedDeviceOverview } from './manageddeviceoverview.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedDeviceOverviewEntityConfig = {
  name: 'managedDeviceOverview',
  base: 'microsoft.graph.entity',
  fields: {
    enrolledDeviceCount: {type: 'Edm.Int32', nullable: false},
    mdmEnrolledCount: {type: 'Edm.Int32', nullable: false},
    dualEnrolledDeviceCount: {type: 'Edm.Int32', nullable: false},
    deviceOperatingSystemSummary: {type: 'graph.deviceOperatingSystemSummary'},
    deviceExchangeAccessStateSummary: {type: 'graph.deviceExchangeAccessStateSummary'}
  }
} as StructuredTypeConfig<ManagedDeviceOverview>;
//#endregion