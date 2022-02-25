//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsDeviceADAccount } from './windowsdeviceadaccount.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsDeviceADAccountComplexConfig = {
  name: 'windowsDeviceADAccount',
  base: 'microsoft.graph.windowsDeviceAccount',
  fields: {
    domainName: {type: 'Edm.String'},
    userName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsDeviceADAccount>;
//#endregion