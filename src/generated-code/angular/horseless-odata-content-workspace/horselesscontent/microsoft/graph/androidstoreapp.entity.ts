//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileApp } from './mobileapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
//#endregion

export interface AndroidStoreApp extends MobileApp {
  //#region ODataApiGen Properties
  packageId?: string;
  appStoreUrl?: string;
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
  //#endregion
}