//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BaseItem } from './baseitem.entity';
import { SharepointIds } from './sharepointids.complex';
import { ListInfo } from './listinfo.complex';
import { SystemFacet } from './systemfacet.complex';
import { Drive } from './drive.entity';
import { ColumnDefinition } from './columndefinition.entity';
import { ContentType } from './contenttype.entity';
import { ListItem } from './listitem.entity';
import { Subscription } from './subscription.entity';
//#endregion

export interface List extends BaseItem {
  //#region ODataApiGen Properties
  displayName?: string;
  list?: ListInfo;
  sharepointIds?: SharepointIds;
  system?: SystemFacet;
  columns?: ColumnDefinition[];
  contentTypes?: ContentType[];
  drive?: Drive;
  items?: ListItem[];
  subscriptions?: Subscription[];
  //#endregion
}