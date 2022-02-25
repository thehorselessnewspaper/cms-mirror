//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { InstallIntent } from './installintent.enum';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.complex';
//#endregion

export interface ManagedEBookAssignment extends Entity {
  //#region ODataApiGen Properties
  target?: DeviceAndAppManagementAssignmentTarget;
  installIntent: InstallIntent;
  //#endregion
}