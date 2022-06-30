//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { ContentCollection } from './contentcollection.entity';
import { Principal } from './principal.entity';
//#endregion

export interface Publication {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  PublishAt?: Date;
  UnPublishAt?: Date;
  IsPublished?: boolean;
  PublishedURL?: string;
  PreviewURL?: string;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  ContentCollections?: ContentCollection[];
  PublicationChildrens?: Publication[];
  PublicationParents?: Publication[];
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}