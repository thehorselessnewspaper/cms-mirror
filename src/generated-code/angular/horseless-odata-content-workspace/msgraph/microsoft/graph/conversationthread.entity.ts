//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Recipient } from './recipient.complex';
import { Post } from './post.entity';
//#endregion

export interface ConversationThread extends Entity {
  //#region ODataApiGen Properties
  toRecipients: Recipient[];
  topic: string;
  hasAttachments: boolean;
  lastDeliveredDateTime: Date;
  uniqueSenders: string[];
  ccRecipients: Recipient[];
  preview: string;
  isLocked: boolean;
  posts?: Post[];
  //#endregion
}