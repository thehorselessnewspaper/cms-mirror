//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EventMessage } from './eventmessage.entity';
import { MeetingRequestType } from './meetingrequesttype.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { Location } from './location.complex';
//#endregion

export interface EventMessageRequest extends EventMessage {
  //#region ODataApiGen Properties
  previousLocation?: Location;
  previousStartDateTime?: DateTimeTimeZone;
  previousEndDateTime?: DateTimeTimeZone;
  responseRequested?: boolean;
  allowNewTimeProposals?: boolean;
  meetingRequestType?: MeetingRequestType;
  //#endregion
}