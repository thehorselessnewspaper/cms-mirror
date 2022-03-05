﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AppListType } from './applisttype.enum';
import { WebBrowserCookieSettings } from './webbrowsercookiesettings.enum';
import { RatingAppsType } from './ratingappstype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.complex';
import { MediaContentRatingAustralia } from './mediacontentratingaustralia.complex';
import { MediaContentRatingCanada } from './mediacontentratingcanada.complex';
import { MediaContentRatingFrance } from './mediacontentratingfrance.complex';
import { MediaContentRatingGermany } from './mediacontentratinggermany.complex';
import { MediaContentRatingIreland } from './mediacontentratingireland.complex';
import { MediaContentRatingJapan } from './mediacontentratingjapan.complex';
import { MediaContentRatingNewZealand } from './mediacontentratingnewzealand.complex';
import { MediaContentRatingUnitedKingdom } from './mediacontentratingunitedkingdom.complex';
import { MediaContentRatingUnitedStates } from './mediacontentratingunitedstates.complex';
import { IosNetworkUsageRule } from './iosnetworkusagerule.complex';
//#endregion

export interface IosGeneralDeviceConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  accountBlockModification: boolean;
  activationLockAllowWhenSupervised: boolean;
  airDropBlocked: boolean;
  airDropForceUnmanagedDropTarget: boolean;
  airPlayForcePairingPasswordForOutgoingRequests: boolean;
  appleWatchBlockPairing: boolean;
  appleWatchForceWristDetection: boolean;
  appleNewsBlocked: boolean;
  appsSingleAppModeList?: AppListItem[];
  appsVisibilityList?: AppListItem[];
  appsVisibilityListType: AppListType;
  appStoreBlockAutomaticDownloads: boolean;
  appStoreBlocked: boolean;
  appStoreBlockInAppPurchases: boolean;
  appStoreBlockUIAppInstallation: boolean;
  appStoreRequirePassword: boolean;
  bluetoothBlockModification: boolean;
  cameraBlocked: boolean;
  cellularBlockDataRoaming: boolean;
  cellularBlockGlobalBackgroundFetchWhileRoaming: boolean;
  cellularBlockPerAppDataModification: boolean;
  cellularBlockPersonalHotspot: boolean;
  cellularBlockVoiceRoaming: boolean;
  certificatesBlockUntrustedTlsCertificates: boolean;
  classroomAppBlockRemoteScreenObservation: boolean;
  classroomAppForceUnpromptedScreenObservation: boolean;
  compliantAppsList?: AppListItem[];
  compliantAppListType: AppListType;
  configurationProfileBlockChanges: boolean;
  definitionLookupBlocked: boolean;
  deviceBlockEnableRestrictions: boolean;
  deviceBlockEraseContentAndSettings: boolean;
  deviceBlockNameModification: boolean;
  diagnosticDataBlockSubmission: boolean;
  diagnosticDataBlockSubmissionModification: boolean;
  documentsBlockManagedDocumentsInUnmanagedApps: boolean;
  documentsBlockUnmanagedDocumentsInManagedApps: boolean;
  emailInDomainSuffixes?: string[];
  enterpriseAppBlockTrust: boolean;
  enterpriseAppBlockTrustModification: boolean;
  faceTimeBlocked: boolean;
  findMyFriendsBlocked: boolean;
  gamingBlockGameCenterFriends: boolean;
  gamingBlockMultiplayer: boolean;
  gameCenterBlocked: boolean;
  hostPairingBlocked: boolean;
  iBooksStoreBlocked: boolean;
  iBooksStoreBlockErotica: boolean;
  iCloudBlockActivityContinuation: boolean;
  iCloudBlockBackup: boolean;
  iCloudBlockDocumentSync: boolean;
  iCloudBlockManagedAppsSync: boolean;
  iCloudBlockPhotoLibrary: boolean;
  iCloudBlockPhotoStreamSync: boolean;
  iCloudBlockSharedPhotoStream: boolean;
  iCloudRequireEncryptedBackup: boolean;
  iTunesBlockExplicitContent: boolean;
  iTunesBlockMusicService: boolean;
  iTunesBlockRadio: boolean;
  keyboardBlockAutoCorrect: boolean;
  keyboardBlockDictation: boolean;
  keyboardBlockPredictive: boolean;
  keyboardBlockShortcuts: boolean;
  keyboardBlockSpellCheck: boolean;
  kioskModeAllowAssistiveSpeak: boolean;
  kioskModeAllowAssistiveTouchSettings: boolean;
  kioskModeAllowAutoLock: boolean;
  kioskModeAllowColorInversionSettings: boolean;
  kioskModeAllowRingerSwitch: boolean;
  kioskModeAllowScreenRotation: boolean;
  kioskModeAllowSleepButton: boolean;
  kioskModeAllowTouchscreen: boolean;
  kioskModeAllowVoiceOverSettings: boolean;
  kioskModeAllowVolumeButtons: boolean;
  kioskModeAllowZoomSettings: boolean;
  kioskModeAppStoreUrl?: string;
  kioskModeBuiltInAppId?: string;
  kioskModeRequireAssistiveTouch: boolean;
  kioskModeRequireColorInversion: boolean;
  kioskModeRequireMonoAudio: boolean;
  kioskModeRequireVoiceOver: boolean;
  kioskModeRequireZoom: boolean;
  kioskModeManagedAppId?: string;
  lockScreenBlockControlCenter: boolean;
  lockScreenBlockNotificationView: boolean;
  lockScreenBlockPassbook: boolean;
  lockScreenBlockTodayView: boolean;
  mediaContentRatingAustralia?: MediaContentRatingAustralia;
  mediaContentRatingCanada?: MediaContentRatingCanada;
  mediaContentRatingFrance?: MediaContentRatingFrance;
  mediaContentRatingGermany?: MediaContentRatingGermany;
  mediaContentRatingIreland?: MediaContentRatingIreland;
  mediaContentRatingJapan?: MediaContentRatingJapan;
  mediaContentRatingNewZealand?: MediaContentRatingNewZealand;
  mediaContentRatingUnitedKingdom?: MediaContentRatingUnitedKingdom;
  mediaContentRatingUnitedStates?: MediaContentRatingUnitedStates;
  networkUsageRules?: IosNetworkUsageRule[];
  mediaContentRatingApps: RatingAppsType;
  messagesBlocked: boolean;
  notificationsBlockSettingsModification: boolean;
  passcodeBlockFingerprintUnlock: boolean;
  passcodeBlockFingerprintModification: boolean;
  passcodeBlockModification: boolean;
  passcodeBlockSimple: boolean;
  passcodeExpirationDays?: number;
  passcodeMinimumLength?: number;
  passcodeMinutesOfInactivityBeforeLock?: number;
  passcodeMinutesOfInactivityBeforeScreenTimeout?: number;
  passcodeMinimumCharacterSetCount?: number;
  passcodePreviousPasscodeBlockCount?: number;
  passcodeSignInFailureCountBeforeWipe?: number;
  passcodeRequiredType: RequiredPasswordType;
  passcodeRequired: boolean;
  podcastsBlocked: boolean;
  safariBlockAutofill: boolean;
  safariBlockJavaScript: boolean;
  safariBlockPopups: boolean;
  safariBlocked: boolean;
  safariCookieSettings: WebBrowserCookieSettings;
  safariManagedDomains?: string[];
  safariPasswordAutoFillDomains?: string[];
  safariRequireFraudWarning: boolean;
  screenCaptureBlocked: boolean;
  siriBlocked: boolean;
  siriBlockedWhenLocked: boolean;
  siriBlockUserGeneratedContent: boolean;
  siriRequireProfanityFilter: boolean;
  spotlightBlockInternetResults: boolean;
  voiceDialingBlocked: boolean;
  wallpaperBlockModification: boolean;
  wiFiConnectOnlyToConfiguredNetworks: boolean;
  //#endregion
}