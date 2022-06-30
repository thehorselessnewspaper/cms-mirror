//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Principal } from './principal.entity';
import { TenantIdentifierStrategy } from './tenantidentifierstrategy.entity';
import { TenantInfo } from './tenantinfo.entity';
//#endregion

export interface Tenant {
  //#region ODataApiGen Properties
  Id: string;
  IsPublished: boolean;
  BaseUrl?: string;
  TenantIdentifier?: string;
  Timestamp?: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  TenantIdentifierStrategy?: TenantIdentifierStrategy;
  TenantInfos?: TenantInfo[];
  AccessControlEntries?: AccessControlEntry[];
  Accounts?: Principal[];
  Owners?: Principal[];
  //#endregion
}