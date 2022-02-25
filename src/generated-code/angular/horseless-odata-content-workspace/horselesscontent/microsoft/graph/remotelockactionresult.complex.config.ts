//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RemoteLockActionResult } from './remotelockactionresult.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RemoteLockActionResultComplexConfig = {
  name: 'remoteLockActionResult',
  base: 'microsoft.graph.deviceActionResult',
  fields: {
    unlockPin: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<RemoteLockActionResult>;
//#endregion