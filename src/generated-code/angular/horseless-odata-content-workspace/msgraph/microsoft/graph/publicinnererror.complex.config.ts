//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicInnerError } from './publicinnererror.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PublicInnerErrorComplexConfig = {
  name: 'publicInnerError',
  open: true,
  fields: {
    code: {type: 'Edm.String'},
    details: {type: 'graph.publicErrorDetail', collection: true},
    message: {type: 'Edm.String'},
    target: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PublicInnerError>;
//#endregion