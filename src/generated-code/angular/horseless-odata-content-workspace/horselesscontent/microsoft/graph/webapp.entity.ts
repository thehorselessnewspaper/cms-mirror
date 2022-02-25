//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileApp } from './mobileapp.entity';
//#endregion

export interface WebApp extends MobileApp {
  //#region ODataApiGen Properties
  appUrl?: string;
  useManagedBrowser: boolean;
  //#endregion
}