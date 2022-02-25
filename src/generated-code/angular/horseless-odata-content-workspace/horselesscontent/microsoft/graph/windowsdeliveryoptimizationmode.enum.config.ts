//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsDeliveryOptimizationMode } from './windowsdeliveryoptimizationmode.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsDeliveryOptimizationModeConfig = {
  name: 'windowsDeliveryOptimizationMode',
  members: WindowsDeliveryOptimizationMode,
  fields: {
    userDefined: {value: 0},
    httpOnly: {value: 1},
    httpWithPeeringNat: {value: 2},
    httpWithPeeringPrivateGroup: {value: 3},
    httpWithInternetPeering: {value: 4},
    simpleDownload: {value: 99},
    bypassMode: {value: 100}
  }
} as EnumTypeConfig<WindowsDeliveryOptimizationMode>;
//#endregion