//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainDnsTxtRecord } from './domaindnstxtrecord.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DomainDnsTxtRecordEntityConfig = {
  name: 'domainDnsTxtRecord',
  base: 'microsoft.graph.domainDnsRecord',
  fields: {
    text: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<DomainDnsTxtRecord>;
//#endregion