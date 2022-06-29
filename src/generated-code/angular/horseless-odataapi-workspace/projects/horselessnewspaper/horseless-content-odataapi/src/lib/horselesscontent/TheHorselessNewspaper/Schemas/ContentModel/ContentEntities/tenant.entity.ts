//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { ContentCollection } from './contentcollection.entity';
import { JSONAsset } from './jsonasset.entity';
import { Principal } from './principal.entity';
import { TenantIdentifierStrategy } from './tenantidentifierstrategy.entity';
//#endregion

export interface Tenant {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  IsPublished: boolean;
  BaseUrl?: string;
  TenantIdentifier?: string;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  AccessControlEntries?: AccessControlEntry[];
  Accounts?: Principal[];
  ContentCollections?: ContentCollection[];
  Owners?: Principal[];
  TenantIdentifierStrategy?: TenantIdentifierStrategy;
  MetaData?: JSONAsset[];
  //#endregion
}