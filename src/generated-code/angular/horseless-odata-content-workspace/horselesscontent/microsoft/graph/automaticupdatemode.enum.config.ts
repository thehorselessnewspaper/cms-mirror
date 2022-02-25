//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AutomaticUpdateMode } from './automaticupdatemode.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AutomaticUpdateModeConfig = {
  name: 'automaticUpdateMode',
  members: AutomaticUpdateMode,
  fields: {
    userDefined: {value: 0},
    notifyDownload: {value: 1},
    autoInstallAtMaintenanceTime: {value: 2},
    autoInstallAndRebootAtMaintenanceTime: {value: 3},
    autoInstallAndRebootAtScheduledTime: {value: 4},
    autoInstallAndRebootWithoutEndUserControl: {value: 5}
  }
} as EnumTypeConfig<AutomaticUpdateMode>;
//#endregion