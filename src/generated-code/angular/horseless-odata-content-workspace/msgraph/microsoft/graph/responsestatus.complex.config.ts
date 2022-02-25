//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResponseStatus } from './responsestatus.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ResponseStatusComplexConfig = {
  name: 'responseStatus',
  fields: {
    response: {type: 'graph.responseType'},
    time: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<ResponseStatus>;
//#endregion