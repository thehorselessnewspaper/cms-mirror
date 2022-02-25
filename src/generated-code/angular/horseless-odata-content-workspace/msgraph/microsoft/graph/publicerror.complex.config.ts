//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicError } from './publicerror.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PublicErrorComplexConfig = {
  name: 'publicError',
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'},
    target: {type: 'Edm.String'},
    details: {type: 'graph.publicErrorDetail', collection: true},
    innerError: {type: 'graph.publicInnerError'}
  }
} as StructuredTypeConfig<PublicError>;
//#endregion