//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface Contract extends DirectoryObject {
  //#region ODataApiGen Properties
  contractType?: string;
  customerId?: string;
  defaultDomainName?: string;
  displayName?: string;
  //#endregion
}