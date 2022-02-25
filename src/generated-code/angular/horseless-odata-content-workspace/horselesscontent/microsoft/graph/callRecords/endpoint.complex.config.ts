//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Endpoint } from './endpoint.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EndpointComplexConfig = {
  name: 'endpoint',
  fields: {
    userAgent: {type: 'microsoft.graph.callRecords.userAgent'}
  }
} as StructuredTypeConfig<Endpoint>;
//#endregion