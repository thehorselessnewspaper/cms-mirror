//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedApp } from './managedapp.entity';
import { IosDeviceType } from './iosdevicetype.complex';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.complex';
//#endregion

export interface ManagedIOSStoreApp extends ManagedApp {
  //#region ODataApiGen Properties
  bundleId?: string;
  appStoreUrl: string;
  applicableDeviceType: IosDeviceType;
  minimumSupportedOperatingSystem: IosMinimumOperatingSystem;
  //#endregion
}