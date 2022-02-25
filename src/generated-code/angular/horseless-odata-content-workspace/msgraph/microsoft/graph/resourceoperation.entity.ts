//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface ResourceOperation extends Entity {
  //#region ODataApiGen Properties
  resourceName?: string;
  actionName?: string;
  description?: string;
  //#endregion
}