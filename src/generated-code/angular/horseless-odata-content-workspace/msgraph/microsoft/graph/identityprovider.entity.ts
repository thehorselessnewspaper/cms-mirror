//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface IdentityProvider extends Entity {
  //#region ODataApiGen Properties
  type?: string;
  name?: string;
  clientId?: string;
  clientSecret?: string;
  //#endregion
}