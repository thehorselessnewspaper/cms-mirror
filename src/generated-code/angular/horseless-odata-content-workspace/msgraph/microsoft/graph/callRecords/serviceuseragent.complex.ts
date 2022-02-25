//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserAgent } from './useragent.complex';
import { ServiceRole } from './servicerole.enum';
//#endregion

export interface ServiceUserAgent extends UserAgent {
  //#region ODataApiGen Properties
  role: ServiceRole;
  //#endregion
}