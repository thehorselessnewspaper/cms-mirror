//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileApp } from './mobileapp.entity';
import { ManagedAppAvailability } from './managedappavailability.enum';
//#endregion

export interface ManagedApp extends MobileApp {
  //#region ODataApiGen Properties
  appAvailability: ManagedAppAvailability;
  version?: string;
  //#endregion
}