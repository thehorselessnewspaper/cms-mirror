//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
//#endregion

export interface WindowsDefenderAdvancedThreatProtectionConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  allowSampleSharing: boolean;
  enableExpeditedTelemetryReporting: boolean;
  //#endregion
}