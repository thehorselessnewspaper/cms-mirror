//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Tenant } from './tenant.entity';
//#endregion

export interface Principal {
  //#region ODataApiGen Properties
  Id: string;
  UPN?: string;
  Email?: string;
  PreferredUserName?: string;
  Timestamp?: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  Iss?: string;
  Aud?: string;
  Sub?: string;
  AccessControlEntries?: AccessControlEntry[];
  OwnedAccessControlEntries?: AccessControlEntry[];
  OwnedPrincipals?: Principal[];
  OwnedTenants?: Tenant[];
  Owners?: Principal[];
  TenantAccounts?: Tenant[];
  //#endregion
}