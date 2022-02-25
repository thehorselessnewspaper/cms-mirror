//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Identity } from './identity.complex';
//#endregion

export interface IdentitySet {
  //#region ODataApiGen Properties
  application?: Identity;
  device?: Identity;
  user?: Identity;
  //#endregion
}