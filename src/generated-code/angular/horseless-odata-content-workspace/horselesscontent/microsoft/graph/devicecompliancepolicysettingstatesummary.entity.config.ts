//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceCompliancePolicySettingStateSummary } from './devicecompliancepolicysettingstatesummary.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceCompliancePolicySettingStateSummaryEntityConfig = {
  name: 'deviceCompliancePolicySettingStateSummary',
  base: 'microsoft.graph.entity',
  fields: {
    setting: {type: 'Edm.String'},
    settingName: {type: 'Edm.String'},
    platformType: {type: 'graph.policyPlatformType', nullable: false},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false},
    deviceComplianceSettingStates: {type: 'graph.deviceComplianceSettingState', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DeviceCompliancePolicySettingStateSummary>;
//#endregion