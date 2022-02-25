//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ItemReference } from './itemreference.complex';
import { ContentTypeOrder } from './contenttypeorder.complex';
import { ColumnLink } from './columnlink.entity';
//#endregion

export interface ContentType extends Entity {
  //#region ODataApiGen Properties
  description?: string;
  group?: string;
  hidden?: boolean;
  inheritedFrom?: ItemReference;
  name?: string;
  order?: ContentTypeOrder;
  parentId?: string;
  readOnly?: boolean;
  sealed?: boolean;
  columnLinks?: ColumnLink[];
  //#endregion
}