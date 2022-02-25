//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.complex';
//#endregion

export interface IosVppAppAssignmentSettings extends MobileAppAssignmentSettings {
  //#region ODataApiGen Properties
  useDeviceLicensing: boolean;
  vpnConfigurationId?: string;
  //#endregion
}