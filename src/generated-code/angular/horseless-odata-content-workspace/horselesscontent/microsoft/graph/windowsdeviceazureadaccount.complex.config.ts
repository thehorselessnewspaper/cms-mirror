//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsDeviceAzureADAccount } from './windowsdeviceazureadaccount.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsDeviceAzureADAccountComplexConfig = {
  name: 'windowsDeviceAzureADAccount',
  base: 'microsoft.graph.windowsDeviceAccount',
  fields: {
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsDeviceAzureADAccount>;
//#endregion