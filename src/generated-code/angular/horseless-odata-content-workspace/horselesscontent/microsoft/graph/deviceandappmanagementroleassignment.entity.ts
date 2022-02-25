//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RoleAssignment } from './roleassignment.entity';
//#endregion

export interface DeviceAndAppManagementRoleAssignment extends RoleAssignment {
  //#region ODataApiGen Properties
  members?: string[];
  //#endregion
}