//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ConversationThread } from './conversationthread.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ConversationThreadEntityConfig = {
  name: 'conversationThread',
  base: 'microsoft.graph.entity',
  fields: {
    toRecipients: {type: 'graph.recipient', nullable: false, collection: true},
    topic: {type: 'Edm.String', nullable: false},
    hasAttachments: {type: 'Edm.Boolean', nullable: false},
    lastDeliveredDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    uniqueSenders: {type: 'Edm.String', nullable: false, collection: true},
    ccRecipients: {type: 'graph.recipient', nullable: false, collection: true},
    preview: {type: 'Edm.String', nullable: false},
    isLocked: {type: 'Edm.Boolean', nullable: false},
    posts: {type: 'graph.post', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ConversationThread>;
//#endregion