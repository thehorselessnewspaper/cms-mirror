//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppleDeviceFeaturesConfigurationBase } from './appledevicefeaturesconfigurationbase.entity';
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenPage } from './ioshomescreenpage.complex';
import { IosNotificationSettings } from './iosnotificationsettings.complex';
//#endregion

export interface IosDeviceFeaturesConfiguration extends AppleDeviceFeaturesConfigurationBase {
  //#region ODataApiGen Properties
  assetTagTemplate?: string;
  lockScreenFootnote?: string;
  homeScreenDockIcons?: IosHomeScreenItem[];
  homeScreenPages?: IosHomeScreenPage[];
  notificationSettings?: IosNotificationSettings[];
  //#endregion
}