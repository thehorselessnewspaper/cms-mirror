//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocateDeviceActionResult } from './locatedeviceactionresult.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LocateDeviceActionResultComplexConfig = {
  name: 'locateDeviceActionResult',
  base: 'microsoft.graph.deviceActionResult',
  fields: {
    deviceLocation: {type: 'graph.deviceGeoLocation'}
  }
} as StructuredTypeConfig<LocateDeviceActionResult>;
//#endregion