//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { NavigationMenuItem } from './navigationmenuitem.entity';
import { Principal } from './principal.entity';
//#endregion

export interface NavigationMenu {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  PublishAt?: Date;
  UnPublishAt?: Date;
  IsPublished?: boolean;
  MenuLabel?: string;
  MenuDescription?: string;
  MenuAltText?: string;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  ChildNavigationMenuItems?: NavigationMenuItem[];
  Children?: NavigationMenu[];
  Parents?: NavigationMenu[];
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}