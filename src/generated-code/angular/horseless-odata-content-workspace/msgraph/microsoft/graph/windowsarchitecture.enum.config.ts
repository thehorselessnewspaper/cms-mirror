//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsArchitecture } from './windowsarchitecture.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsArchitectureConfig = {
  name: 'windowsArchitecture',
  flags: true,
  members: WindowsArchitecture,
  fields: {
    none: {value: 0},
    x86: {value: 1},
    x64: {value: 2},
    arm: {value: 4},
    neutral: {value: 8}
  }
} as EnumTypeConfig<WindowsArchitecture>;
//#endregion