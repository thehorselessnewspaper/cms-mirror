//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
//#endregion

export interface ChatMessageReaction {
  //#region ODataApiGen Properties
  reactionType: string;
  createdDateTime: Date;
  user: IdentitySet;
  //#endregion
}