//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedMobileLobApp } from './managedmobilelobapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
//#endregion

export interface ManagedAndroidLobApp extends ManagedMobileLobApp {
  //#region ODataApiGen Properties
  packageId?: string;
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
  versionName?: string;
  versionCode?: string;
  //#endregion
}