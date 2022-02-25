//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface ManagedAppStatus extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  version?: string;
  //#endregion
}