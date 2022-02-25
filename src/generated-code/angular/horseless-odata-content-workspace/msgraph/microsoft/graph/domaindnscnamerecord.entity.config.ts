//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainDnsCnameRecord } from './domaindnscnamerecord.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DomainDnsCnameRecordEntityConfig = {
  name: 'domainDnsCnameRecord',
  base: 'microsoft.graph.domainDnsRecord',
  fields: {
    canonicalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DomainDnsCnameRecord>;
//#endregion