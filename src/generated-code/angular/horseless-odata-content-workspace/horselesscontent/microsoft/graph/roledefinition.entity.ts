//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { RolePermission } from './rolepermission.complex';
import { RoleAssignment } from './roleassignment.entity';
//#endregion

export interface RoleDefinition extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  description?: string;
  rolePermissions?: RolePermission[];
  isBuiltIn: boolean;
  roleAssignments?: RoleAssignment[];
  //#endregion
}