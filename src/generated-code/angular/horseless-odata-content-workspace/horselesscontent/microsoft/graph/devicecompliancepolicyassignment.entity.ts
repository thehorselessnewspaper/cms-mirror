﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.complex';
//#endregion

export interface DeviceCompliancePolicyAssignment extends Entity {
  //#region ODataApiGen Properties
  target?: DeviceAndAppManagementAssignmentTarget;
  //#endregion
}