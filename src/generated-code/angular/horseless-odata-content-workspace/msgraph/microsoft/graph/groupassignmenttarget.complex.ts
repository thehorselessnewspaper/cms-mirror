//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.complex';
//#endregion

export interface GroupAssignmentTarget extends DeviceAndAppManagementAssignmentTarget {
  //#region ODataApiGen Properties
  groupId?: string;
  //#endregion
}