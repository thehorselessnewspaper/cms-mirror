//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
//#endregion

export interface DomainDnsTxtRecord extends DomainDnsRecord {
  //#region ODataApiGen Properties
  text: string;
  //#endregion
}