//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Principal } from './principal.entity';
import { TenantInfo } from './tenantinfo.entity';
//#endregion

export interface WebAPITenantInfo {
  //#region ODataApiGen Properties
  Id: string;
  Timestamp?: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  Identifier?: string;
  Name?: string;
  ConnectionString?: string;
  WebAPIBaseUrl?: string;
  TenantInfoId?: string;
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  TenantInfo?: TenantInfo;
  //#endregion
}