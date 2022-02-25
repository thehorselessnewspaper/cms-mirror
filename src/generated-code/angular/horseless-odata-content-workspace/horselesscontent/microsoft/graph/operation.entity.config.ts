//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Operation } from './operation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OperationEntityConfig = {
  name: 'operation',
  base: 'microsoft.graph.entity',
  fields: {
    status: {type: 'graph.operationStatus'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastActionDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<Operation>;
//#endregion