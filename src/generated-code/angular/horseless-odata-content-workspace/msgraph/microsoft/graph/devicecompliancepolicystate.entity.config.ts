//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceCompliancePolicyState } from './devicecompliancepolicystate.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceCompliancePolicyStateEntityConfig = {
  name: 'deviceCompliancePolicyState',
  base: 'microsoft.graph.entity',
  fields: {
    settingStates: {type: 'graph.deviceCompliancePolicySettingState', collection: true},
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.Int32', nullable: false},
    platformType: {type: 'graph.policyPlatformType', nullable: false},
    state: {type: 'graph.complianceStatus', nullable: false},
    settingCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceCompliancePolicyState>;
//#endregion