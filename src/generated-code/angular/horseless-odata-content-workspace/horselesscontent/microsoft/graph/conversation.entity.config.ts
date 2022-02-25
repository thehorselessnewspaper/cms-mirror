//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Conversation } from './conversation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ConversationEntityConfig = {
  name: 'conversation',
  base: 'microsoft.graph.entity',
  fields: {
    topic: {type: 'Edm.String', nullable: false},
    hasAttachments: {type: 'Edm.Boolean', nullable: false},
    lastDeliveredDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    uniqueSenders: {type: 'Edm.String', nullable: false, collection: true},
    preview: {type: 'Edm.String', nullable: false},
    threads: {type: 'graph.conversationThread', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Conversation>;
//#endregion