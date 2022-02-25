//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
//#endregion

export interface AndroidLobApp extends MobileLobApp {
  //#region ODataApiGen Properties
  packageId?: string;
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
  versionName?: string;
  versionCode?: string;
  //#endregion
}