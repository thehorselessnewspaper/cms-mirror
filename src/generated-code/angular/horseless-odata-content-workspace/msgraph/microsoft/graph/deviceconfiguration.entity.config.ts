//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceConfigurationEntityConfig = {
  name: 'deviceConfiguration',
  base: 'microsoft.graph.entity',
  fields: {
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    version: {type: 'Edm.Int32', nullable: false},
    assignments: {type: 'graph.deviceConfigurationAssignment', collection: true, navigation: true},
    deviceStatuses: {type: 'graph.deviceConfigurationDeviceStatus', collection: true, navigation: true},
    userStatuses: {type: 'graph.deviceConfigurationUserStatus', collection: true, navigation: true},
    deviceStatusOverview: {type: 'graph.deviceConfigurationDeviceOverview', navigation: true},
    userStatusOverview: {type: 'graph.deviceConfigurationUserOverview', navigation: true},
    deviceSettingStateSummaries: {type: 'graph.settingStateDeviceSummary', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DeviceConfiguration>;
//#endregion