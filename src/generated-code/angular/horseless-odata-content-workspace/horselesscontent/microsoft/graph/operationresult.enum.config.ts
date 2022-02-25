//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OperationResult } from './operationresult.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const OperationResultConfig = {
  name: 'operationResult',
  members: OperationResult,
  fields: {
    success: {value: 0},
    failure: {value: 1},
    timeout: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<OperationResult>;
//#endregion