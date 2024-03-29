﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceCompliancePolicyEntityConfig = {
  name: 'deviceCompliancePolicy',
  base: 'microsoft.graph.entity',
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    displayName: {type: 'Edm.String', nullable: false},
    version: {type: 'Edm.Int32', nullable: false},
    scheduledActionsForRule: {type: 'graph.deviceComplianceScheduledActionForRule', collection: true, navigation: true},
    deviceStatuses: {type: 'graph.deviceComplianceDeviceStatus', collection: true, navigation: true},
    userStatuses: {type: 'graph.deviceComplianceUserStatus', collection: true, navigation: true},
    deviceStatusOverview: {type: 'graph.deviceComplianceDeviceOverview', navigation: true},
    userStatusOverview: {type: 'graph.deviceComplianceUserOverview', navigation: true},
    deviceSettingStateSummaries: {type: 'graph.settingStateDeviceSummary', collection: true, navigation: true},
    assignments: {type: 'graph.deviceCompliancePolicyAssignment', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DeviceCompliancePolicy>;
//#endregion