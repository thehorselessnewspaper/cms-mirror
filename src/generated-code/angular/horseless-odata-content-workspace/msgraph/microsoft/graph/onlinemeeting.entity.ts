//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ItemBody } from './itembody.complex';
import { ChatInfo } from './chatinfo.complex';
import { MeetingParticipants } from './meetingparticipants.complex';
import { AudioConferencing } from './audioconferencing.complex';
//#endregion

export interface OnlineMeeting extends Entity {
  //#region ODataApiGen Properties
  creationDateTime?: Date;
  startDateTime?: Date;
  endDateTime?: Date;
  joinWebUrl?: string;
  subject?: string;
  participants?: MeetingParticipants;
  audioConferencing?: AudioConferencing;
  chatInfo?: ChatInfo;
  videoTeleconferenceId?: string;
  externalId?: string;
  joinInformation?: ItemBody;
  //#endregion
}