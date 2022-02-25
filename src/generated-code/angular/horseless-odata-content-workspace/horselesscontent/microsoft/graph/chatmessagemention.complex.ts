//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
//#endregion

export interface ChatMessageMention {
  //#region ODataApiGen Properties
  id?: number;
  mentionText?: string;
  mentioned?: IdentitySet;
  //#endregion
}