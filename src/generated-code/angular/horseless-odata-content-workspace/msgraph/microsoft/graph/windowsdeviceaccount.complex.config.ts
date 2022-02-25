//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsDeviceAccountComplexConfig = {
  name: 'windowsDeviceAccount',
  fields: {
    password: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsDeviceAccount>;
//#endregion