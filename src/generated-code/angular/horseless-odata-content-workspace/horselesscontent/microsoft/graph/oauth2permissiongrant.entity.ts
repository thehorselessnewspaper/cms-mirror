//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface OAuth2PermissionGrant extends Entity {
  //#region ODataApiGen Properties
  clientId: string;
  consentType?: string;
  principalId?: string;
  resourceId: string;
  scope?: string;
  //#endregion
}