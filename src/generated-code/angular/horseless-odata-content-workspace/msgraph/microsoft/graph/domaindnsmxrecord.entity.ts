//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
//#endregion

export interface DomainDnsMxRecord extends DomainDnsRecord {
  //#region ODataApiGen Properties
  mailExchange: string;
  preference?: number;
  //#endregion
}