//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ACEPermissionScope } from './acepermissionscope.enum';
import { ACEPermission } from './acepermission.enum';
import { ACEPermissionType } from './acepermissiontype.enum';
import { Principal } from './principal.entity';
import { Tenant } from './tenant.entity';
//#endregion

export interface AccessControlEntry {
  //#region ODataApiGen Properties
  Id: string;
  Scope: ACEPermissionScope;
  Permission: ACEPermission;
  PermissionType: ACEPermissionType;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  IsActive?: boolean;
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  SubjectAccessControlEntries?: AccessControlEntry[];
  SubjectPrincipals?: Principal[];
  SubjectTenants?: Tenant[];
  //#endregion
}