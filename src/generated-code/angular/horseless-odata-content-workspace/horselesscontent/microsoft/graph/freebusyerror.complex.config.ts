//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FreeBusyError } from './freebusyerror.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FreeBusyErrorComplexConfig = {
  name: 'freeBusyError',
  fields: {
    message: {type: 'Edm.String'},
    responseCode: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<FreeBusyError>;
//#endregion