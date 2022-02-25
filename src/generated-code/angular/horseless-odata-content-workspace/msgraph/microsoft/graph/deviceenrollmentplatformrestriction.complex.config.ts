//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceEnrollmentPlatformRestriction } from './deviceenrollmentplatformrestriction.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceEnrollmentPlatformRestrictionComplexConfig = {
  name: 'deviceEnrollmentPlatformRestriction',
  fields: {
    platformBlocked: {type: 'Edm.Boolean', nullable: false},
    personalDeviceEnrollmentBlocked: {type: 'Edm.Boolean', nullable: false},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceEnrollmentPlatformRestriction>;
//#endregion