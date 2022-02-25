//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OutlookItem } from './outlookitem.entity';
import { Recipient } from './recipient.complex';
import { ItemBody } from './itembody.complex';
import { Extension } from './extension.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { Attachment } from './attachment.entity';
//#endregion

export interface Post extends OutlookItem {
  //#region ODataApiGen Properties
  body?: ItemBody;
  receivedDateTime: Date;
  hasAttachments: boolean;
  from: Recipient;
  sender?: Recipient;
  conversationThreadId?: string;
  newParticipants: Recipient[];
  conversationId?: string;
  inReplyTo?: Post;
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  extensions?: Extension[];
  attachments?: Attachment[];
  //#endregion
}