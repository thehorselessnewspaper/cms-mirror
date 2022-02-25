//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ConvertIdResult } from './convertidresult.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ConvertIdResultComplexConfig = {
  name: 'convertIdResult',
  fields: {
    sourceId: {type: 'Edm.String'},
    targetId: {type: 'Edm.String'},
    errorDetails: {type: 'graph.genericError'}
  }
} as StructuredTypeConfig<ConvertIdResult>;
//#endregion