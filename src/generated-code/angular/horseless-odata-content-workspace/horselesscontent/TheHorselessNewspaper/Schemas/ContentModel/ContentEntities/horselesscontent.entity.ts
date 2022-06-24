//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { ContentCollection } from './contentcollection.entity';
import { FilesystemAsset } from './filesystemasset.entity';
import { JSONAsset } from './jsonasset.entity';
import { MIMEType } from './mimetype.entity';
import { Principal } from './principal.entity';
//#endregion

export interface HorselessContent {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  FilesystemAssetId?: string;
  JSONAssetId?: string;
  MIMETypeId?: string;
  IsPublished?: boolean;
  PublishedURL?: string;
  PreviewURL?: string;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  FilesystemAsset?: FilesystemAsset;
  JSONAsset?: JSONAsset;
  MIMEType?: MIMEType;
  ContentCollections?: ContentCollection[];
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}