//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { NavigationMenu } from './navigationmenu.entity';
import { Principal } from './principal.entity';
//#endregion

export interface NavigationMenuItem {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  PublishAt?: Date;
  UnPublishAt?: Date;
  IsPublished?: boolean;
  MenuItemLabel?: string;
  MenuItemDescription?: string;
  MenuItemAltText?: string;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  ChildNavigationItems?: NavigationMenuItem[];
  ParentNavigationItems?: NavigationMenuItem[];
  ParentNavigationMenus?: NavigationMenu[];
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}