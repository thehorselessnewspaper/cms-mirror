//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ACEPermissionScope } from './acepermissionscope.enum';
import { ACEPermission } from './acepermission.enum';
import { ACEPermissionType } from './acepermissiontype.enum';
//#endregion

export interface AccessControlEntry {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  IsActive?: boolean;
  Scope: ACEPermissionScope;
  Permission: ACEPermission;
  PermissionType: ACEPermissionType;
  Timestamp: ArrayBuffer;
  //#endregion
}