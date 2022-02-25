//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceCompliancePolicyDeviceStateSummary } from './devicecompliancepolicydevicestatesummary.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceCompliancePolicyDeviceStateSummaryEntityConfig = {
  name: 'deviceCompliancePolicyDeviceStateSummary',
  base: 'microsoft.graph.entity',
  fields: {
    inGracePeriodCount: {type: 'Edm.Int32', nullable: false},
    configManagerCount: {type: 'Edm.Int32', nullable: false},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceCompliancePolicyDeviceStateSummary>;
//#endregion