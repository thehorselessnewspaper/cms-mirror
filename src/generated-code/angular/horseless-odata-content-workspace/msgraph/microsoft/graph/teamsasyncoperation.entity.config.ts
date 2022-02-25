//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamsAsyncOperation } from './teamsasyncoperation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamsAsyncOperationEntityConfig = {
  name: 'teamsAsyncOperation',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    operationType: {type: 'graph.teamsAsyncOperationType', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.teamsAsyncOperationStatus', nullable: false},
    lastActionDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    attemptsCount: {type: 'Edm.Int32', nullable: false},
    targetResourceId: {type: 'Edm.String'},
    targetResourceLocation: {type: 'Edm.String'},
    error: {type: 'graph.operationError'}
  }
} as StructuredTypeConfig<TeamsAsyncOperation>;
//#endregion