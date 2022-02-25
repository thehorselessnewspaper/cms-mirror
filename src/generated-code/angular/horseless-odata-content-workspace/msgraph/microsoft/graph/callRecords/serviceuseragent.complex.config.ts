//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ServiceUserAgent } from './serviceuseragent.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ServiceUserAgentComplexConfig = {
  name: 'serviceUserAgent',
  base: 'microsoft.graph.callRecords.userAgent',
  fields: {
    role: {type: 'microsoft.graph.callRecords.serviceRole', nullable: false}
  }
} as StructuredTypeConfig<ServiceUserAgent>;
//#endregion