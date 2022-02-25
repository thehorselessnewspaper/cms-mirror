//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DataPolicyOperationStatus } from './datapolicyoperationstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DataPolicyOperationStatusConfig = {
  name: 'dataPolicyOperationStatus',
  members: DataPolicyOperationStatus,
  fields: {
    notStarted: {value: 0},
    running: {value: 1},
    complete: {value: 2},
    failed: {value: 3},
    unknownFutureValue: {value: 4}
  }
} as EnumTypeConfig<DataPolicyOperationStatus>;
//#endregion