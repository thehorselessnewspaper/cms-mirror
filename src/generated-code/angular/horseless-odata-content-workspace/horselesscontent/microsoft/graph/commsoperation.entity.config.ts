//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CommsOperation } from './commsoperation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CommsOperationEntityConfig = {
  name: 'commsOperation',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    status: {type: 'graph.operationStatus', nullable: false},
    clientContext: {type: 'Edm.String'},
    resultInfo: {type: 'graph.resultInfo'}
  }
} as StructuredTypeConfig<CommsOperation>;
//#endregion