//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SecurityResourceType } from './securityresourcetype.enum';
//#endregion

export interface SecurityResource {
  //#region ODataApiGen Properties
  resource?: string;
  resourceType?: SecurityResourceType;
  //#endregion
}