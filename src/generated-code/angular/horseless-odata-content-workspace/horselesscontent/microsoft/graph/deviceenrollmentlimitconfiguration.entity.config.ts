//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceEnrollmentLimitConfiguration } from './deviceenrollmentlimitconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceEnrollmentLimitConfigurationEntityConfig = {
  name: 'deviceEnrollmentLimitConfiguration',
  base: 'microsoft.graph.deviceEnrollmentConfiguration',
  fields: {
    limit: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceEnrollmentLimitConfiguration>;
//#endregion