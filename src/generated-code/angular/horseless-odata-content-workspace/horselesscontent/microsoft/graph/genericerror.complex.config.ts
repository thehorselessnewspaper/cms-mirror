//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GenericError } from './genericerror.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const GenericErrorComplexConfig = {
  name: 'genericError',
  fields: {
    message: {type: 'Edm.String'},
    code: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<GenericError>;
//#endregion