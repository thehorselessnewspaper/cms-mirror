//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface ManagedAppOperation extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  lastModifiedDateTime: Date;
  state?: string;
  version?: string;
  //#endregion
}