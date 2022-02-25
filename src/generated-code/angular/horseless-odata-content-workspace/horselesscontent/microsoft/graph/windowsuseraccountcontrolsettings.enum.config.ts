//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsUserAccountControlSettings } from './windowsuseraccountcontrolsettings.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsUserAccountControlSettingsConfig = {
  name: 'windowsUserAccountControlSettings',
  members: WindowsUserAccountControlSettings,
  fields: {
    userDefined: {value: 0},
    alwaysNotify: {value: 1},
    notifyOnAppChanges: {value: 2},
    notifyOnAppChangesWithoutDimming: {value: 3},
    neverNotify: {value: 4}
  }
} as EnumTypeConfig<WindowsUserAccountControlSettings>;
//#endregion