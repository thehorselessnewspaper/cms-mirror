//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OutlookItem } from './outlookitem.entity';
import { FreeBusyStatus } from './freebusystatus.enum';
import { Importance } from './importance.enum';
import { EventType } from './eventtype.enum';
import { OnlineMeetingProviderType } from './onlinemeetingprovidertype.enum';
import { Sensitivity } from './sensitivity.enum';
import { Recipient } from './recipient.complex';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { Location } from './location.complex';
import { ItemBody } from './itembody.complex';
import { PatternedRecurrence } from './patternedrecurrence.complex';
import { ResponseStatus } from './responsestatus.complex';
import { Attendee } from './attendee.complex';
import { OnlineMeetingInfo } from './onlinemeetinginfo.complex';
import { Calendar } from './calendar.entity';
import { Extension } from './extension.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { Attachment } from './attachment.entity';
//#endregion

export interface Event extends OutlookItem {
  //#region ODataApiGen Properties
  originalStartTimeZone?: string;
  originalEndTimeZone?: string;
  responseStatus?: ResponseStatus;
  iCalUId?: string;
  reminderMinutesBeforeStart?: number;
  isReminderOn?: boolean;
  hasAttachments?: boolean;
  subject?: string;
  body?: ItemBody;
  bodyPreview?: string;
  importance?: Importance;
  sensitivity?: Sensitivity;
  start?: DateTimeTimeZone;
  originalStart?: Date;
  end?: DateTimeTimeZone;
  location?: Location;
  locations?: Location[];
  isAllDay?: boolean;
  isCancelled?: boolean;
  isOrganizer?: boolean;
  recurrence?: PatternedRecurrence;
  responseRequested?: boolean;
  seriesMasterId?: string;
  showAs?: FreeBusyStatus;
  type?: EventType;
  attendees?: Attendee[];
  organizer?: Recipient;
  webLink?: string;
  onlineMeetingUrl?: string;
  isOnlineMeeting?: boolean;
  onlineMeetingProvider?: OnlineMeetingProviderType;
  onlineMeeting?: OnlineMeetingInfo;
  allowNewTimeProposals?: boolean;
  attachments?: Attachment[];
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  calendar?: Calendar;
  instances?: Event[];
  extensions?: Extension[];
  //#endregion
}