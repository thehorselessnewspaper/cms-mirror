//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ParticipantInfo } from './participantinfo.complex';
import { RecordingInfo } from './recordinginfo.complex';
import { MediaStream } from './mediastream.complex';
//#endregion

export interface Participant extends Entity {
  //#region ODataApiGen Properties
  info: ParticipantInfo;
  recordingInfo?: RecordingInfo;
  mediaStreams?: MediaStream[];
  isMuted: boolean;
  isInLobby: boolean;
  //#endregion
}