//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsHelloForBusinessPinUsage } from './windowshelloforbusinesspinusage.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsHelloForBusinessPinUsageConfig = {
  name: 'windowsHelloForBusinessPinUsage',
  members: WindowsHelloForBusinessPinUsage,
  fields: {
    allowed: {value: 0},
    required: {value: 1},
    disallowed: {value: 2}
  }
} as EnumTypeConfig<WindowsHelloForBusinessPinUsage>;
//#endregion