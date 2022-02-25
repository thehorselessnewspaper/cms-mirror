//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
import { DeviceEnrollmentFailureReason } from './deviceenrollmentfailurereason.enum';
//#endregion

export interface EnrollmentTroubleshootingEvent extends DeviceManagementTroubleshootingEvent {
  //#region ODataApiGen Properties
  managedDeviceIdentifier?: string;
  operatingSystem?: string;
  osVersion?: string;
  userId?: string;
  deviceId?: string;
  enrollmentType: DeviceEnrollmentType;
  failureCategory: DeviceEnrollmentFailureReason;
  failureReason?: string;
  //#endregion
}