//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsStartMenuModeType } from './windowsstartmenumodetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsStartMenuModeTypeConfig = {
  name: 'windowsStartMenuModeType',
  members: WindowsStartMenuModeType,
  fields: {
    userDefined: {value: 0},
    fullScreen: {value: 1},
    nonFullScreen: {value: 2}
  }
} as EnumTypeConfig<WindowsStartMenuModeType>;
//#endregion