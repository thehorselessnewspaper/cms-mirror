//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfigurationDeviceStateSummary } from './deviceconfigurationdevicestatesummary.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceConfigurationDeviceStateSummaryEntityConfig = {
  name: 'deviceConfigurationDeviceStateSummary',
  base: 'microsoft.graph.entity',
  fields: {
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceConfigurationDeviceStateSummary>;
//#endregion