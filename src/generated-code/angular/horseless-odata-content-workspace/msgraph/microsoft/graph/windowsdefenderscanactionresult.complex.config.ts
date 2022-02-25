//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsDefenderScanActionResult } from './windowsdefenderscanactionresult.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsDefenderScanActionResultComplexConfig = {
  name: 'windowsDefenderScanActionResult',
  base: 'microsoft.graph.deviceActionResult',
  fields: {
    scanType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsDefenderScanActionResult>;
//#endregion