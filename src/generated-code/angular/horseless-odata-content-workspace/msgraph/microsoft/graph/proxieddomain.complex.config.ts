//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProxiedDomain } from './proxieddomain.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ProxiedDomainComplexConfig = {
  name: 'proxiedDomain',
  fields: {
    ipAddressOrFQDN: {type: 'Edm.String', nullable: false},
    proxy: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ProxiedDomain>;
//#endregion