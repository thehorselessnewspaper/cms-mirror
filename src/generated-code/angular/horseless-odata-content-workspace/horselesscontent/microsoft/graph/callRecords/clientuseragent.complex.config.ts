//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ClientUserAgent } from './clientuseragent.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ClientUserAgentComplexConfig = {
  name: 'clientUserAgent',
  base: 'microsoft.graph.callRecords.userAgent',
  fields: {
    platform: {type: 'microsoft.graph.callRecords.clientPlatform', nullable: false},
    productFamily: {type: 'microsoft.graph.callRecords.productFamily', nullable: false}
  }
} as StructuredTypeConfig<ClientUserAgent>;
//#endregion