//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainDnsMxRecord } from './domaindnsmxrecord.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DomainDnsMxRecordEntityConfig = {
  name: 'domainDnsMxRecord',
  base: 'microsoft.graph.domainDnsRecord',
  fields: {
    mailExchange: {type: 'Edm.String', nullable: false},
    preference: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<DomainDnsMxRecord>;
//#endregion