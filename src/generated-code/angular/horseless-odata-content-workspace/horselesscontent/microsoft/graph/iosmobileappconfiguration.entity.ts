//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedDeviceMobileAppConfiguration } from './manageddevicemobileappconfiguration.entity';
import { AppConfigurationSettingItem } from './appconfigurationsettingitem.complex';
//#endregion

export interface IosMobileAppConfiguration extends ManagedDeviceMobileAppConfiguration {
  //#region ODataApiGen Properties
  encodedSettingXml?: ArrayBuffer;
  settings?: AppConfigurationSettingItem[];
  //#endregion
}