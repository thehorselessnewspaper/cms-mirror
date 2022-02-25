//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DomainDnsRecordEntityConfig = {
  name: 'domainDnsRecord',
  base: 'microsoft.graph.entity',
  fields: {
    isOptional: {type: 'Edm.Boolean', nullable: false},
    label: {type: 'Edm.String', nullable: false},
    recordType: {type: 'Edm.String'},
    supportedService: {type: 'Edm.String', nullable: false},
    ttl: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DomainDnsRecord>;
//#endregion