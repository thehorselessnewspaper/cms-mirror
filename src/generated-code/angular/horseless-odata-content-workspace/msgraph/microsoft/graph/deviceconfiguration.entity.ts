﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DeviceConfigurationAssignment } from './deviceconfigurationassignment.entity';
import { DeviceConfigurationDeviceStatus } from './deviceconfigurationdevicestatus.entity';
import { DeviceConfigurationUserStatus } from './deviceconfigurationuserstatus.entity';
import { DeviceConfigurationDeviceOverview } from './deviceconfigurationdeviceoverview.entity';
import { DeviceConfigurationUserOverview } from './deviceconfigurationuseroverview.entity';
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
//#endregion

export interface DeviceConfiguration extends Entity {
  //#region ODataApiGen Properties
  lastModifiedDateTime: Date;
  createdDateTime: Date;
  description?: string;
  displayName: string;
  version: number;
  assignments?: DeviceConfigurationAssignment[];
  deviceStatuses?: DeviceConfigurationDeviceStatus[];
  userStatuses?: DeviceConfigurationUserStatus[];
  deviceStatusOverview?: DeviceConfigurationDeviceOverview;
  userStatusOverview?: DeviceConfigurationUserOverview;
  deviceSettingStateSummaries?: SettingStateDeviceSummary[];
  //#endregion
}