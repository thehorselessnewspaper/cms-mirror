//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppStatus } from './managedappstatus.entity';
import { Json } from './json.complex';
//#endregion

export interface ManagedAppStatusRaw extends ManagedAppStatus {
  //#region ODataApiGen Properties
  content?: Json;
  //#endregion
}