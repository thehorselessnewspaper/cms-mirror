//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResetPasscodeActionResult } from './resetpasscodeactionresult.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ResetPasscodeActionResultComplexConfig = {
  name: 'resetPasscodeActionResult',
  base: 'microsoft.graph.deviceActionResult',
  fields: {
    passcode: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ResetPasscodeActionResult>;
//#endregion