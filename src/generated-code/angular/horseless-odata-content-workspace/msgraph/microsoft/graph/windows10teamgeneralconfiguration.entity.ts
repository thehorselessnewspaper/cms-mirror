﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { MiracastChannel } from './miracastchannel.enum';
import { WelcomeScreenMeetingInformation } from './welcomescreenmeetinginformation.enum';
//#endregion

export interface Windows10TeamGeneralConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  azureOperationalInsightsBlockTelemetry: boolean;
  azureOperationalInsightsWorkspaceId?: string;
  azureOperationalInsightsWorkspaceKey?: string;
  connectAppBlockAutoLaunch: boolean;
  maintenanceWindowBlocked: boolean;
  maintenanceWindowDurationInHours?: number;
  maintenanceWindowStartTime?: Date;
  miracastChannel: MiracastChannel;
  miracastBlocked: boolean;
  miracastRequirePin: boolean;
  settingsBlockMyMeetingsAndFiles: boolean;
  settingsBlockSessionResume: boolean;
  settingsBlockSigninSuggestions: boolean;
  settingsDefaultVolume?: number;
  settingsScreenTimeoutInMinutes?: number;
  settingsSessionTimeoutInMinutes?: number;
  settingsSleepTimeoutInMinutes?: number;
  welcomeScreenBlockAutomaticWakeUp: boolean;
  welcomeScreenBackgroundImageUrl?: string;
  welcomeScreenMeetingInformation: WelcomeScreenMeetingInformation;
  //#endregion
}