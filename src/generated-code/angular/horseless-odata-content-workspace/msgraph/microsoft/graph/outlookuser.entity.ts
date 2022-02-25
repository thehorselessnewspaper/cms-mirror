//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { OutlookCategory } from './outlookcategory.entity';
//#endregion

export interface OutlookUser extends Entity {
  //#region ODataApiGen Properties
  masterCategories?: OutlookCategory[];
  //#endregion
}