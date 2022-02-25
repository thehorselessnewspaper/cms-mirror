//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OperationStatus } from './operationstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const OperationStatusConfig = {
  name: 'operationStatus',
  members: OperationStatus,
  fields: {
    NotStarted: {value: 0},
    Running: {value: 1},
    Completed: {value: 2},
    Failed: {value: 3}
  }
} as EnumTypeConfig<OperationStatus>;
//#endregion