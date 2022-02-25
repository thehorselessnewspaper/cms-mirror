//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsStartMenuAppListVisibilityType } from './windowsstartmenuapplistvisibilitytype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsStartMenuAppListVisibilityTypeConfig = {
  name: 'windowsStartMenuAppListVisibilityType',
  flags: true,
  members: WindowsStartMenuAppListVisibilityType,
  fields: {
    userDefined: {value: 0},
    collapse: {value: 1},
    remove: {value: 2},
    disableSettingsApp: {value: 4}
  }
} as EnumTypeConfig<WindowsStartMenuAppListVisibilityType>;
//#endregion