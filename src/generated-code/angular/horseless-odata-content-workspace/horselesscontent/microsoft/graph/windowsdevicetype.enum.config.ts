//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsDeviceType } from './windowsdevicetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsDeviceTypeConfig = {
  name: 'windowsDeviceType',
  flags: true,
  members: WindowsDeviceType,
  fields: {
    none: {value: 0},
    desktop: {value: 1},
    mobile: {value: 2},
    holographic: {value: 4},
    team: {value: 8}
  }
} as EnumTypeConfig<WindowsDeviceType>;
//#endregion