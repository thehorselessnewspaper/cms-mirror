//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BaseItem } from './baseitem.entity';
import { PublicError } from './publicerror.complex';
import { Root } from './root.complex';
import { SharepointIds } from './sharepointids.complex';
import { SiteCollection } from './sitecollection.complex';
import { Drive } from './drive.entity';
import { Onenote } from './onenote.entity';
import { ItemAnalytics } from './itemanalytics.entity';
import { ColumnDefinition } from './columndefinition.entity';
import { ContentType } from './contenttype.entity';
import { List } from './list.entity';
//#endregion

export interface Site extends BaseItem {
  //#region ODataApiGen Properties
  error?: PublicError;
  displayName?: string;
  root?: Root;
  sharepointIds?: SharepointIds;
  siteCollection?: SiteCollection;
  analytics?: ItemAnalytics;
  columns?: ColumnDefinition[];
  contentTypes?: ContentType[];
  drive?: Drive;
  drives?: Drive[];
  items?: BaseItem[];
  lists?: List[];
  sites?: Site[];
  onenote?: Onenote;
  //#endregion
}