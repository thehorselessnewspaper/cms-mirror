﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { EnrollmentConfigurationAssignment } from './enrollmentconfigurationassignment.entity';
//#endregion

export interface DeviceEnrollmentConfiguration extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  description?: string;
  priority: number;
  createdDateTime: Date;
  lastModifiedDateTime: Date;
  version: number;
  assignments?: EnrollmentConfigurationAssignment[];
  //#endregion
}