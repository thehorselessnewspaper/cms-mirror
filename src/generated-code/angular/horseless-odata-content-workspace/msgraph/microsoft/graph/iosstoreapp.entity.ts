//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileApp } from './mobileapp.entity';
import { IosDeviceType } from './iosdevicetype.complex';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.complex';
//#endregion

export interface IosStoreApp extends MobileApp {
  //#region ODataApiGen Properties
  bundleId?: string;
  appStoreUrl?: string;
  applicableDeviceType: IosDeviceType;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
  //#endregion
}