//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfigurationState } from './deviceconfigurationstate.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceConfigurationStateEntityConfig = {
  name: 'deviceConfigurationState',
  base: 'microsoft.graph.entity',
  fields: {
    settingStates: {type: 'graph.deviceConfigurationSettingState', collection: true},
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.Int32', nullable: false},
    platformType: {type: 'graph.policyPlatformType', nullable: false},
    state: {type: 'graph.complianceStatus', nullable: false},
    settingCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceConfigurationState>;
//#endregion