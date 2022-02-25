//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessageMention } from './chatmessagemention.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ChatMessageMentionComplexConfig = {
  name: 'chatMessageMention',
  fields: {
    id: {type: 'Edm.Int32'},
    mentionText: {type: 'Edm.String'},
    mentioned: {type: 'graph.identitySet'}
  }
} as StructuredTypeConfig<ChatMessageMention>;
//#endregion