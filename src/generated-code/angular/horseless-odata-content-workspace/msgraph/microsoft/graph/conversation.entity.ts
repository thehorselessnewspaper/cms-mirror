//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ConversationThread } from './conversationthread.entity';
//#endregion

export interface Conversation extends Entity {
  //#region ODataApiGen Properties
  topic: string;
  hasAttachments: boolean;
  lastDeliveredDateTime: Date;
  uniqueSenders: string[];
  preview: string;
  threads?: ConversationThread[];
  //#endregion
}