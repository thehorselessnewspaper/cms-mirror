//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteOperationError } from './onenoteoperationerror.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenoteOperationErrorComplexConfig = {
  name: 'onenoteOperationError',
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OnenoteOperationError>;
//#endregion