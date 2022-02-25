//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AppListType } from './applisttype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.complex';
//#endregion

export interface WindowsPhone81GeneralConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  applyOnlyToWindowsPhone81: boolean;
  appsBlockCopyPaste: boolean;
  bluetoothBlocked: boolean;
  cameraBlocked: boolean;
  cellularBlockWifiTethering: boolean;
  compliantAppsList?: AppListItem[];
  compliantAppListType: AppListType;
  diagnosticDataBlockSubmission: boolean;
  emailBlockAddingAccounts: boolean;
  locationServicesBlocked: boolean;
  microsoftAccountBlocked: boolean;
  nfcBlocked: boolean;
  passwordBlockSimple: boolean;
  passwordExpirationDays?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordSignInFailureCountBeforeFactoryReset?: number;
  passwordRequiredType: RequiredPasswordType;
  passwordRequired: boolean;
  screenCaptureBlocked: boolean;
  storageBlockRemovableStorage: boolean;
  storageRequireEncryption: boolean;
  webBrowserBlocked: boolean;
  wifiBlocked: boolean;
  wifiBlockAutomaticConnectHotspots: boolean;
  wifiBlockHotspotReporting: boolean;
  windowsStoreBlocked: boolean;
  //#endregion
}