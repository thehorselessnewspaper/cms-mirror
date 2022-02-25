//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ChatMessageType } from './chatmessagetype.enum';
import { ChatMessageImportance } from './chatmessageimportance.enum';
import { IdentitySet } from './identityset.complex';
import { ItemBody } from './itembody.complex';
import { ChatMessageAttachment } from './chatmessageattachment.complex';
import { ChatMessageMention } from './chatmessagemention.complex';
import { ChatMessagePolicyViolation } from './chatmessagepolicyviolation.complex';
import { ChatMessageReaction } from './chatmessagereaction.complex';
import { ChatMessageHostedContent } from './chatmessagehostedcontent.entity';
//#endregion

export interface ChatMessage extends Entity {
  //#region ODataApiGen Properties
  replyToId?: string;
  from?: IdentitySet;
  etag?: string;
  messageType: ChatMessageType;
  createdDateTime?: Date;
  lastModifiedDateTime?: Date;
  deletedDateTime?: Date;
  subject?: string;
  body: ItemBody;
  summary?: string;
  attachments?: ChatMessageAttachment[];
  mentions?: ChatMessageMention[];
  importance: ChatMessageImportance;
  policyViolation?: ChatMessagePolicyViolation;
  reactions?: ChatMessageReaction[];
  locale: string;
  webUrl?: string;
  replies?: ChatMessage[];
  hostedContents?: ChatMessageHostedContent[];
  //#endregion
}