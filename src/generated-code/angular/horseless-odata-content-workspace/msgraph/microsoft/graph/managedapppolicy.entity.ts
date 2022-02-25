//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface ManagedAppPolicy extends Entity {
  //#region ODataApiGen Properties
  displayName: string;
  description?: string;
  createdDateTime: Date;
  lastModifiedDateTime: Date;
  version?: string;
  //#endregion
}