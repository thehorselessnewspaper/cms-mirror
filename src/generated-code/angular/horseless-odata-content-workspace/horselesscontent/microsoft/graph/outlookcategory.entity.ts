//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { CategoryColor } from './categorycolor.enum';
//#endregion

export interface OutlookCategory extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  color?: CategoryColor;
  //#endregion
}