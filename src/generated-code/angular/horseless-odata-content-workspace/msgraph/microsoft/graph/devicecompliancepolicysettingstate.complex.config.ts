﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceCompliancePolicySettingState } from './devicecompliancepolicysettingstate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceCompliancePolicySettingStateComplexConfig = {
  name: 'deviceCompliancePolicySettingState',
  fields: {
    setting: {type: 'Edm.String'},
    settingName: {type: 'Edm.String'},
    instanceDisplayName: {type: 'Edm.String'},
    state: {type: 'graph.complianceStatus', nullable: false},
    errorCode: {type: 'Edm.Int64', nullable: false},
    errorDescription: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    userEmail: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    sources: {type: 'graph.settingSource', collection: true},
    currentValue: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceCompliancePolicySettingState>;
//#endregion