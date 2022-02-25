//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainDnsUnavailableRecord } from './domaindnsunavailablerecord.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DomainDnsUnavailableRecordEntityConfig = {
  name: 'domainDnsUnavailableRecord',
  base: 'microsoft.graph.domainDnsRecord',
  fields: {
    description: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DomainDnsUnavailableRecord>;
//#endregion