//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
//#endregion

export interface DomainDnsSrvRecord extends DomainDnsRecord {
  //#region ODataApiGen Properties
  nameTarget?: string;
  port?: number;
  priority?: number;
  protocol?: string;
  service?: string;
  weight?: number;
  //#endregion
}