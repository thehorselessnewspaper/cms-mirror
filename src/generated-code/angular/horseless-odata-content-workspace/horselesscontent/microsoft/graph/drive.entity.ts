//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BaseItem } from './baseitem.entity';
import { IdentitySet } from './identityset.complex';
import { SharepointIds } from './sharepointids.complex';
import { SystemFacet } from './systemfacet.complex';
import { Quota } from './quota.complex';
import { List } from './list.entity';
import { DriveItem } from './driveitem.entity';
//#endregion

export interface Drive extends BaseItem {
  //#region ODataApiGen Properties
  driveType?: string;
  owner?: IdentitySet;
  quota?: Quota;
  sharePointIds?: SharepointIds;
  system?: SystemFacet;
  following?: DriveItem[];
  items?: DriveItem[];
  list?: List;
  root?: DriveItem;
  special?: DriveItem[];
  //#endregion
}