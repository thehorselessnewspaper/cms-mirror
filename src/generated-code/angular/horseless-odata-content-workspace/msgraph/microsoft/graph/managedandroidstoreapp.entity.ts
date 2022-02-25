//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedApp } from './managedapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
//#endregion

export interface ManagedAndroidStoreApp extends ManagedApp {
  //#region ODataApiGen Properties
  packageId?: string;
  appStoreUrl: string;
  minimumSupportedOperatingSystem: AndroidMinimumOperatingSystem;
  //#endregion
}