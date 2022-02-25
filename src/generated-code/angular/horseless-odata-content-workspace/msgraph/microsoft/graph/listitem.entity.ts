//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BaseItem } from './baseitem.entity';
import { SharepointIds } from './sharepointids.complex';
import { ContentTypeInfo } from './contenttypeinfo.complex';
import { ItemAnalytics } from './itemanalytics.entity';
import { DriveItem } from './driveitem.entity';
import { FieldValueSet } from './fieldvalueset.entity';
import { ListItemVersion } from './listitemversion.entity';
//#endregion

export interface ListItem extends BaseItem {
  //#region ODataApiGen Properties
  contentType?: ContentTypeInfo;
  sharepointIds?: SharepointIds;
  analytics?: ItemAnalytics;
  driveItem?: DriveItem;
  fields?: FieldValueSet;
  versions?: ListItemVersion[];
  //#endregion
}