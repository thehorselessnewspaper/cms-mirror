//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { HorselessContent } from './horselesscontent.entity';
import { Principal } from './principal.entity';
//#endregion

export interface FilesystemAsset {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  Filename?: string;
  PublishedURL?: string;
  PreviewURL?: string;
  Timestamp: ArrayBuffer;
  HorselessContents?: HorselessContent[];
  AccessControlList?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}