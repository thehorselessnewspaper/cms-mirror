//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementSettings } from './devicemanagementsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceManagementSettingsComplexConfig = {
  name: 'deviceManagementSettings',
  fields: {
    deviceComplianceCheckinThresholdDays: {type: 'Edm.Int32', nullable: false},
    isScheduledActionEnabled: {type: 'Edm.Boolean', nullable: false},
    secureByDefault: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<DeviceManagementSettings>;
//#endregion