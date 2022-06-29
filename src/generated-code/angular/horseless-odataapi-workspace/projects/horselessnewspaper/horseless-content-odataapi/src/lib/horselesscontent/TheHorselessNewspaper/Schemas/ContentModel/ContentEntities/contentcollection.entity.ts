//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { HorselessContent } from './horselesscontent.entity';
import { HorselessView } from './horselessview.entity';
import { Principal } from './principal.entity';
import { Publication } from './publication.entity';
import { Taxonomy } from './taxonomy.entity';
import { Tenant } from './tenant.entity';
//#endregion

export interface ContentCollection {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  AllowAnonymousRead?: boolean;
  IsPublished?: boolean;
  PublishedURL?: string;
  PreviewURL?: string;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  ChildContentCollections?: ContentCollection[];
  HorselessViews?: HorselessView[];
  MimeContents?: HorselessContent[];
  ParentContentCollections?: ContentCollection[];
  Publications?: Publication[];
  Taxonomies?: Taxonomy[];
  Tenants?: Tenant[];
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}