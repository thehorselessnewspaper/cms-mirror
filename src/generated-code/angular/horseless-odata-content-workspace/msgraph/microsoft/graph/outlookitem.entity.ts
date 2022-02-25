//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface OutlookItem extends Entity {
  //#region ODataApiGen Properties
  createdDateTime?: Date;
  lastModifiedDateTime?: Date;
  changeKey?: string;
  categories?: string[];
  //#endregion
}