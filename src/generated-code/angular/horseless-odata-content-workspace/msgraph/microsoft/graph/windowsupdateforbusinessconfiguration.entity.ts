﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AutomaticUpdateMode } from './automaticupdatemode.enum';
import { PrereleaseFeatures } from './prereleasefeatures.enum';
import { WindowsDeliveryOptimizationMode } from './windowsdeliveryoptimizationmode.enum';
import { WindowsUpdateType } from './windowsupdatetype.enum';
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.complex';
//#endregion

export interface WindowsUpdateForBusinessConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  deliveryOptimizationMode: WindowsDeliveryOptimizationMode;
  prereleaseFeatures: PrereleaseFeatures;
  automaticUpdateMode: AutomaticUpdateMode;
  microsoftUpdateServiceAllowed: boolean;
  driversExcluded: boolean;
  installationSchedule?: WindowsUpdateInstallScheduleType;
  qualityUpdatesDeferralPeriodInDays: number;
  featureUpdatesDeferralPeriodInDays: number;
  qualityUpdatesPaused: boolean;
  featureUpdatesPaused: boolean;
  qualityUpdatesPauseExpiryDateTime: Date;
  featureUpdatesPauseExpiryDateTime: Date;
  businessReadyUpdatesOnly: WindowsUpdateType;
  //#endregion
}