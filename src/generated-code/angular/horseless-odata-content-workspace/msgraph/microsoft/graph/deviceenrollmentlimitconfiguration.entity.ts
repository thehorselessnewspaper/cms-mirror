//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
//#endregion

export interface DeviceEnrollmentLimitConfiguration extends DeviceEnrollmentConfiguration {
  //#region ODataApiGen Properties
  limit: number;
  //#endregion
}