﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfigurationUserOverview } from './deviceconfigurationuseroverview.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceConfigurationUserOverviewEntityConfig = {
  name: 'deviceConfigurationUserOverview',
  base: 'microsoft.graph.entity',
  fields: {
    pendingCount: {type: 'Edm.Int32', nullable: false},
    notApplicableCount: {type: 'Edm.Int32', nullable: false},
    successCount: {type: 'Edm.Int32', nullable: false},
    errorCount: {type: 'Edm.Int32', nullable: false},
    failedCount: {type: 'Edm.Int32', nullable: false},
    lastUpdateDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    configurationVersion: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceConfigurationUserOverview>;
//#endregion