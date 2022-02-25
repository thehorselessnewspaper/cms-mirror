//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PreAuthorizedApplication } from './preauthorizedapplication.complex';
import { PermissionScope } from './permissionscope.complex';
//#endregion

export interface ApiApplication {
  //#region ODataApiGen Properties
  acceptMappedClaims?: boolean;
  knownClientApplications?: string[];
  preAuthorizedApplications?: PreAuthorizedApplication[];
  requestedAccessTokenVersion?: number;
  oauth2PermissionScopes: PermissionScope[];
  //#endregion
}