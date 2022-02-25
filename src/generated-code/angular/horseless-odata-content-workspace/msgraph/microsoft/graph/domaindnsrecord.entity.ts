//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface DomainDnsRecord extends Entity {
  //#region ODataApiGen Properties
  isOptional: boolean;
  label: string;
  recordType?: string;
  supportedService: string;
  ttl: number;
  //#endregion
}