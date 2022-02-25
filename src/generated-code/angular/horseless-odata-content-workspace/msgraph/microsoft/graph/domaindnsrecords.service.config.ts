//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainDnsRecordsService } from './domaindnsrecords.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DomainDnsRecordsServiceEntitySetConfig = {
  name: 'domainDnsRecords',
  entityType: 'microsoft.graph.domainDnsRecord',
  service: DomainDnsRecordsService
} as EntitySetConfig;
//#endregion