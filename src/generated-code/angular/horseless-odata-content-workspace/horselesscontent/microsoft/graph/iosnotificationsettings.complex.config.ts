//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosNotificationSettings } from './iosnotificationsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosNotificationSettingsComplexConfig = {
  name: 'iosNotificationSettings',
  fields: {
    bundleID: {type: 'Edm.String', nullable: false},
    appName: {type: 'Edm.String'},
    publisher: {type: 'Edm.String'},
    enabled: {type: 'Edm.Boolean'},
    showInNotificationCenter: {type: 'Edm.Boolean'},
    showOnLockScreen: {type: 'Edm.Boolean'},
    alertType: {type: 'graph.iosNotificationAlertType', nullable: false},
    badgesEnabled: {type: 'Edm.Boolean'},
    soundsEnabled: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<IosNotificationSettings>;
//#endregion