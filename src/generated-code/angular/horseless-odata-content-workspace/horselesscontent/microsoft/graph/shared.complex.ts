//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
//#endregion

export interface Shared {
  //#region ODataApiGen Properties
  owner?: IdentitySet;
  scope?: string;
  sharedBy?: IdentitySet;
  sharedDateTime?: Date;
  //#endregion
}