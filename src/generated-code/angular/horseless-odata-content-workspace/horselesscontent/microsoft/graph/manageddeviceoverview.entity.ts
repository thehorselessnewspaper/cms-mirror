//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DeviceOperatingSystemSummary } from './deviceoperatingsystemsummary.complex';
import { DeviceExchangeAccessStateSummary } from './deviceexchangeaccessstatesummary.complex';
//#endregion

export interface ManagedDeviceOverview extends Entity {
  //#region ODataApiGen Properties
  enrolledDeviceCount: number;
  mdmEnrolledCount: number;
  dualEnrolledDeviceCount: number;
  deviceOperatingSystemSummary?: DeviceOperatingSystemSummary;
  deviceExchangeAccessStateSummary?: DeviceExchangeAccessStateSummary;
  //#endregion
}