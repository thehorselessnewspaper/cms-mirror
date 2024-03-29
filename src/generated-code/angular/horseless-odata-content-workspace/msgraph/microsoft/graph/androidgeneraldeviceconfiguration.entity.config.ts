﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidGeneralDeviceConfiguration } from './androidgeneraldeviceconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AndroidGeneralDeviceConfigurationEntityConfig = {
  name: 'androidGeneralDeviceConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    appsBlockClipboardSharing: {type: 'Edm.Boolean', nullable: false},
    appsBlockCopyPaste: {type: 'Edm.Boolean', nullable: false},
    appsBlockYouTube: {type: 'Edm.Boolean', nullable: false},
    bluetoothBlocked: {type: 'Edm.Boolean', nullable: false},
    cameraBlocked: {type: 'Edm.Boolean', nullable: false},
    cellularBlockDataRoaming: {type: 'Edm.Boolean', nullable: false},
    cellularBlockMessaging: {type: 'Edm.Boolean', nullable: false},
    cellularBlockVoiceRoaming: {type: 'Edm.Boolean', nullable: false},
    cellularBlockWiFiTethering: {type: 'Edm.Boolean', nullable: false},
    compliantAppsList: {type: 'graph.appListItem', collection: true},
    compliantAppListType: {type: 'graph.appListType', nullable: false},
    diagnosticDataBlockSubmission: {type: 'Edm.Boolean', nullable: false},
    locationServicesBlocked: {type: 'Edm.Boolean', nullable: false},
    googleAccountBlockAutoSync: {type: 'Edm.Boolean', nullable: false},
    googlePlayStoreBlocked: {type: 'Edm.Boolean', nullable: false},
    kioskModeBlockSleepButton: {type: 'Edm.Boolean', nullable: false},
    kioskModeBlockVolumeButtons: {type: 'Edm.Boolean', nullable: false},
    kioskModeApps: {type: 'graph.appListItem', collection: true},
    nfcBlocked: {type: 'Edm.Boolean', nullable: false},
    passwordBlockFingerprintUnlock: {type: 'Edm.Boolean', nullable: false},
    passwordBlockTrustAgents: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeScreenTimeout: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordSignInFailureCountBeforeFactoryReset: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.androidRequiredPasswordType', nullable: false},
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    powerOffBlocked: {type: 'Edm.Boolean', nullable: false},
    factoryResetBlocked: {type: 'Edm.Boolean', nullable: false},
    screenCaptureBlocked: {type: 'Edm.Boolean', nullable: false},
    deviceSharingAllowed: {type: 'Edm.Boolean', nullable: false},
    storageBlockGoogleBackup: {type: 'Edm.Boolean', nullable: false},
    storageBlockRemovableStorage: {type: 'Edm.Boolean', nullable: false},
    storageRequireDeviceEncryption: {type: 'Edm.Boolean', nullable: false},
    storageRequireRemovableStorageEncryption: {type: 'Edm.Boolean', nullable: false},
    voiceAssistantBlocked: {type: 'Edm.Boolean', nullable: false},
    voiceDialingBlocked: {type: 'Edm.Boolean', nullable: false},
    webBrowserBlockPopups: {type: 'Edm.Boolean', nullable: false},
    webBrowserBlockAutofill: {type: 'Edm.Boolean', nullable: false},
    webBrowserBlockJavaScript: {type: 'Edm.Boolean', nullable: false},
    webBrowserBlocked: {type: 'Edm.Boolean', nullable: false},
    webBrowserCookieSettings: {type: 'graph.webBrowserCookieSettings', nullable: false},
    wiFiBlocked: {type: 'Edm.Boolean', nullable: false},
    appsInstallAllowList: {type: 'graph.appListItem', collection: true},
    appsLaunchBlockList: {type: 'graph.appListItem', collection: true},
    appsHideList: {type: 'graph.appListItem', collection: true},
    securityRequireVerifyApps: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<AndroidGeneralDeviceConfiguration>;
//#endregion