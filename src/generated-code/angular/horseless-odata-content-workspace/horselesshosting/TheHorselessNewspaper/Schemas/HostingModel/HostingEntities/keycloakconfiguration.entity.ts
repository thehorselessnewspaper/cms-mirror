//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Principal } from './principal.entity';
import { TenantInfo } from './tenantinfo.entity';
//#endregion

export interface KeyCloakConfiguration {
  //#region ODataApiGen Properties
  Id: string;
  IsSoftDeleted?: boolean;
  Timestamp?: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  DisplayName?: string;
  Authority?: string;
  Realm?: string;
  ObjectId?: string;
  CreatedAt?: Date;
  Iss?: string;
  Aud?: string;
  TenantInfoId?: string;
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  TenantInfo?: TenantInfo;
  //#endregion
}