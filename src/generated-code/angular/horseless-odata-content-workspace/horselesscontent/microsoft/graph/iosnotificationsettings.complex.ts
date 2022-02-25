//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosNotificationAlertType } from './iosnotificationalerttype.enum';
//#endregion

export interface IosNotificationSettings {
  //#region ODataApiGen Properties
  bundleID: string;
  appName?: string;
  publisher?: string;
  enabled?: boolean;
  showInNotificationCenter?: boolean;
  showOnLockScreen?: boolean;
  alertType: IosNotificationAlertType;
  badgesEnabled?: boolean;
  soundsEnabled?: boolean;
  //#endregion
}