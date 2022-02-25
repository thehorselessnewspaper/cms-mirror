//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamsAsyncOperationType } from './teamsasyncoperationtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const TeamsAsyncOperationTypeConfig = {
  name: 'teamsAsyncOperationType',
  members: TeamsAsyncOperationType,
  fields: {
    invalid: {value: 0},
    cloneTeam: {value: 1},
    archiveTeam: {value: 2},
    unarchiveTeam: {value: 3},
    createTeam: {value: 4},
    unknownFutureValue: {value: 5}
  }
} as EnumTypeConfig<TeamsAsyncOperationType>;
//#endregion