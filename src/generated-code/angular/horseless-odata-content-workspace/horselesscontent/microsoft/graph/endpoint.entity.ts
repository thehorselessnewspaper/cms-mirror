//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface Endpoint extends DirectoryObject {
  //#region ODataApiGen Properties
  capability: string;
  providerId?: string;
  providerName?: string;
  uri: string;
  providerResourceId?: string;
  //#endregion
}