//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyName } from './tenantidentifierstrategyname.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const TenantIdentifierStrategyNameConfig = {
  name: 'TenantIdentifierStrategyName',
  members: TenantIdentifierStrategyName,
  fields: {
    STATIC: {value: 0},
    BASE_PATH: {value: 1},
    ASPNETCORE_ROUTE: {value: 2},
    DNS_HOSTNAME: {value: 3},
    DNS_FQDN: {value: 4}
  }
} as EnumTypeConfig<TenantIdentifierStrategyName>;
//#endregion