//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsUpdateType } from './windowsupdatetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsUpdateTypeConfig = {
  name: 'windowsUpdateType',
  members: WindowsUpdateType,
  fields: {
    userDefined: {value: 0},
    all: {value: 1},
    businessReadyOnly: {value: 2},
    windowsInsiderBuildFast: {value: 3},
    windowsInsiderBuildSlow: {value: 4},
    windowsInsiderBuildRelease: {value: 5}
  }
} as EnumTypeConfig<WindowsUpdateType>;
//#endregion