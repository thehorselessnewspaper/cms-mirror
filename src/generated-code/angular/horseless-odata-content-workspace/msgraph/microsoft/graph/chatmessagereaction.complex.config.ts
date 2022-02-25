//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessageReaction } from './chatmessagereaction.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ChatMessageReactionComplexConfig = {
  name: 'chatMessageReaction',
  fields: {
    reactionType: {type: 'Edm.String', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    user: {type: 'graph.identitySet', nullable: false}
  }
} as StructuredTypeConfig<ChatMessageReaction>;
//#endregion