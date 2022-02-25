//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Message } from './message.entity';
import { MeetingMessageType } from './meetingmessagetype.enum';
import { EventType } from './eventtype.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { Location } from './location.complex';
import { PatternedRecurrence } from './patternedrecurrence.complex';
import { Event } from './event.entity';
//#endregion

export interface EventMessage extends Message {
  //#region ODataApiGen Properties
  meetingMessageType?: MeetingMessageType;
  startDateTime?: DateTimeTimeZone;
  endDateTime?: DateTimeTimeZone;
  location?: Location;
  type?: EventType;
  recurrence?: PatternedRecurrence;
  isOutOfDate?: boolean;
  isAllDay?: boolean;
  isDelegated?: boolean;
  event?: Event;
  //#endregion
}