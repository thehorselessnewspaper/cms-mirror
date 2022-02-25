//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceOperatingSystemSummary } from './deviceoperatingsystemsummary.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceOperatingSystemSummaryComplexConfig = {
  name: 'deviceOperatingSystemSummary',
  fields: {
    androidCount: {type: 'Edm.Int32', nullable: false},
    iosCount: {type: 'Edm.Int32', nullable: false},
    macOSCount: {type: 'Edm.Int32', nullable: false},
    windowsMobileCount: {type: 'Edm.Int32', nullable: false},
    windowsCount: {type: 'Edm.Int32', nullable: false},
    unknownCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceOperatingSystemSummary>;
//#endregion