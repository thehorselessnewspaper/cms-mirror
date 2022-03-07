//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { ContentCollection } from './contentcollection.entity';
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
  Timestamp: ArrayBuffer;
  ContentCollections?: ContentCollection[];
  TenantIdentifierStrategy?: TenantIdentifierStrategy;
  AccessControlList?: AccessControlEntry[];
  Owners?: Principal[];
  Principals?: Principal[];
  //#endregion
}