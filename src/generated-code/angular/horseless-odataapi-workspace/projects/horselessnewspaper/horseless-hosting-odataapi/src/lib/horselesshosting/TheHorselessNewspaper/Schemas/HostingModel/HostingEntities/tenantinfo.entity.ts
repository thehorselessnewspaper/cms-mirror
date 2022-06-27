//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { KeyCloakConfiguration } from './keycloakconfiguration.entity';
import { Tenant } from './tenant.entity';
import { WebAPITenantInfo } from './webapitenantinfo.entity';
//#endregion

export interface TenantInfo {
  //#region ODataApiGen Properties
  Id: string;
  Timestamp?: ArrayBuffer;
  ParentTenantId?: string;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  Identifier?: string;
  Name?: string;
  ConnectionString?: string;
  TenantBaseUrl?: string;
  AccessControlEntries?: AccessControlEntry[];
  ParentTenant?: Tenant;
  KeyCloakConfigurations?: KeyCloakConfiguration[];
  WebAPITenantInfos?: WebAPITenantInfo[];
  //#endregion
}