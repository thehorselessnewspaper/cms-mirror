//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
//#endregion

export interface Windows10EnterpriseModernAppManagementConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  uninstallBuiltInApps: boolean;
  //#endregion
}