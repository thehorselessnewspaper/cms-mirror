//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OutlookItem } from './outlookitem.entity';
import { Importance } from './importance.enum';
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
import { Recipient } from './recipient.complex';
import { InternetMessageHeader } from './internetmessageheader.complex';
import { ItemBody } from './itembody.complex';
import { FollowupFlag } from './followupflag.complex';
import { Extension } from './extension.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { Attachment } from './attachment.entity';
//#endregion

export interface Message extends OutlookItem {
  //#region ODataApiGen Properties
  receivedDateTime?: Date;
  sentDateTime?: Date;
  hasAttachments?: boolean;
  internetMessageId?: string;
  internetMessageHeaders?: InternetMessageHeader[];
  subject?: string;
  body?: ItemBody;
  bodyPreview?: string;
  importance?: Importance;
  parentFolderId?: string;
  sender?: Recipient;
  from?: Recipient;
  toRecipients?: Recipient[];
  ccRecipients?: Recipient[];
  bccRecipients?: Recipient[];
  replyTo?: Recipient[];
  conversationId?: string;
  conversationIndex?: ArrayBuffer;
  uniqueBody?: ItemBody;
  isDeliveryReceiptRequested?: boolean;
  isReadReceiptRequested?: boolean;
  isRead?: boolean;
  isDraft?: boolean;
  webLink?: string;
  inferenceClassification?: InferenceClassificationType;
  flag?: FollowupFlag;
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  attachments?: Attachment[];
  extensions?: Extension[];
  //#endregion
}