//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceEnrollmentPlatformRestrictionsConfiguration } from './deviceenrollmentplatformrestrictionsconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceEnrollmentPlatformRestrictionsConfigurationEntityConfig = {
  name: 'deviceEnrollmentPlatformRestrictionsConfiguration',
  base: 'microsoft.graph.deviceEnrollmentConfiguration',
  fields: {
    iosRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    windowsRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    windowsMobileRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    androidRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    macOSRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'}
  }
} as StructuredTypeConfig<DeviceEnrollmentPlatformRestrictionsConfiguration>;
//#endregion