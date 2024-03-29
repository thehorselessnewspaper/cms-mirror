﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SettingStateDeviceSummaryEntityConfig = {
  name: 'settingStateDeviceSummary',
  base: 'microsoft.graph.entity',
  fields: {
    settingName: {type: 'Edm.String'},
    instancePath: {type: 'Edm.String'},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<SettingStateDeviceSummary>;
//#endregion