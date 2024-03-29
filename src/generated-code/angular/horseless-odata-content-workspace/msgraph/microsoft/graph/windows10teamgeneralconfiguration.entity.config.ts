﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Windows10TeamGeneralConfiguration } from './windows10teamgeneralconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const Windows10TeamGeneralConfigurationEntityConfig = {
  name: 'windows10TeamGeneralConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    azureOperationalInsightsBlockTelemetry: {type: 'Edm.Boolean', nullable: false},
    azureOperationalInsightsWorkspaceId: {type: 'Edm.String'},
    azureOperationalInsightsWorkspaceKey: {type: 'Edm.String'},
    connectAppBlockAutoLaunch: {type: 'Edm.Boolean', nullable: false},
    maintenanceWindowBlocked: {type: 'Edm.Boolean', nullable: false},
    maintenanceWindowDurationInHours: {type: 'Edm.Int32'},
    maintenanceWindowStartTime: {type: 'Edm.TimeOfDay'},
    miracastChannel: {type: 'graph.miracastChannel', nullable: false},
    miracastBlocked: {type: 'Edm.Boolean', nullable: false},
    miracastRequirePin: {type: 'Edm.Boolean', nullable: false},
    settingsBlockMyMeetingsAndFiles: {type: 'Edm.Boolean', nullable: false},
    settingsBlockSessionResume: {type: 'Edm.Boolean', nullable: false},
    settingsBlockSigninSuggestions: {type: 'Edm.Boolean', nullable: false},
    settingsDefaultVolume: {type: 'Edm.Int32'},
    settingsScreenTimeoutInMinutes: {type: 'Edm.Int32'},
    settingsSessionTimeoutInMinutes: {type: 'Edm.Int32'},
    settingsSleepTimeoutInMinutes: {type: 'Edm.Int32'},
    welcomeScreenBlockAutomaticWakeUp: {type: 'Edm.Boolean', nullable: false},
    welcomeScreenBackgroundImageUrl: {type: 'Edm.String'},
    welcomeScreenMeetingInformation: {type: 'graph.welcomeScreenMeetingInformation', nullable: false}
  }
} as StructuredTypeConfig<Windows10TeamGeneralConfiguration>;
//#endregion