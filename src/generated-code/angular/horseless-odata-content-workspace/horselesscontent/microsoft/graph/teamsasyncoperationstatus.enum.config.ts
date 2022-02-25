//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamsAsyncOperationStatus } from './teamsasyncoperationstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const TeamsAsyncOperationStatusConfig = {
  name: 'teamsAsyncOperationStatus',
  members: TeamsAsyncOperationStatus,
  fields: {
    invalid: {value: 0},
    notStarted: {value: 1},
    inProgress: {value: 2},
    succeeded: {value: 3},
    failed: {value: 4},
    unknownFutureValue: {value: 5}
  }
} as EnumTypeConfig<TeamsAsyncOperationStatus>;
//#endregion