//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { ContentCollection } from './contentcollection.entity';
import { Principal } from './principal.entity';
//#endregion

export interface HorselessView {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  IsActive?: boolean;
  UpdatedAt?: Date;
  Timestamp: ArrayBuffer;
  Exists: boolean;
  IsDirectory: boolean;
  LastModified: Date;
  Length: number;
  Name: string;
  PhysicalPath: string;
  ViewContent: ArrayBuffer;
  DictionaryKey?: string;
  ContentCollections?: ContentCollection[];
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}