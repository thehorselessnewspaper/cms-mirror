//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { InstallIntent } from './installintent.enum';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.complex';
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.complex';
//#endregion

export interface MobileAppAssignment extends Entity {
  //#region ODataApiGen Properties
  intent: InstallIntent;
  target?: DeviceAndAppManagementAssignmentTarget;
  settings?: MobileAppAssignmentSettings;
  //#endregion
}