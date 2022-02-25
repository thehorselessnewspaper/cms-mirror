//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface Directory extends Entity {
  //#region ODataApiGen Properties
  deletedItems?: DirectoryObject[];
  //#endregion
}