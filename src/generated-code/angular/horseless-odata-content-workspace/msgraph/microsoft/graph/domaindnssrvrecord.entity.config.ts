//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainDnsSrvRecord } from './domaindnssrvrecord.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DomainDnsSrvRecordEntityConfig = {
  name: 'domainDnsSrvRecord',
  base: 'microsoft.graph.domainDnsRecord',
  fields: {
    nameTarget: {type: 'Edm.String'},
    port: {type: 'Edm.Int32'},
    priority: {type: 'Edm.Int32'},
    protocol: {type: 'Edm.String'},
    service: {type: 'Edm.String'},
    weight: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<DomainDnsSrvRecord>;
//#endregion