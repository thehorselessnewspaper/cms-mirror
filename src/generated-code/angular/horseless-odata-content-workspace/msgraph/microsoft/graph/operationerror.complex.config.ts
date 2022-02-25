//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OperationError } from './operationerror.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OperationErrorComplexConfig = {
  name: 'operationError',
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OperationError>;
//#endregion