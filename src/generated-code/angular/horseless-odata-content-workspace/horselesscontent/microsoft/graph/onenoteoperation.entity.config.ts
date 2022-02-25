//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteOperation } from './onenoteoperation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenoteOperationEntityConfig = {
  name: 'onenoteOperation',
  base: 'microsoft.graph.operation',
  fields: {
    resourceLocation: {type: 'Edm.String'},
    resourceId: {type: 'Edm.String'},
    error: {type: 'graph.onenoteOperationError'},
    percentComplete: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OnenoteOperation>;
//#endregion