//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { CallDirection } from './calldirection.enum';
import { CallState } from './callstate.enum';
import { Modality } from './modality.enum';
import { CallMediaState } from './callmediastate.complex';
import { ResultInfo } from './resultinfo.complex';
import { CallRoute } from './callroute.complex';
import { ParticipantInfo } from './participantinfo.complex';
import { InvitationParticipantInfo } from './invitationparticipantinfo.complex';
import { MediaConfig } from './mediaconfig.complex';
import { ChatInfo } from './chatinfo.complex';
import { CallOptions } from './calloptions.complex';
import { MeetingInfo } from './meetinginfo.complex';
import { ToneInfo } from './toneinfo.complex';
import { IncomingContext } from './incomingcontext.complex';
import { Participant } from './participant.entity';
import { CommsOperation } from './commsoperation.entity';
//#endregion

export interface Call extends Entity {
  //#region ODataApiGen Properties
  state?: CallState;
  mediaState?: CallMediaState;
  resultInfo?: ResultInfo;
  direction?: CallDirection;
  subject?: string;
  callbackUri: string;
  callRoutes?: CallRoute[];
  source?: ParticipantInfo;
  targets?: InvitationParticipantInfo[];
  requestedModalities?: Modality;
  mediaConfig?: MediaConfig;
  chatInfo?: ChatInfo;
  callOptions?: CallOptions;
  meetingInfo?: MeetingInfo;
  tenantId?: string;
  myParticipantId?: string;
  toneInfo?: ToneInfo;
  callChainId?: string;
  incomingContext?: IncomingContext;
  participants?: Participant[];
  operations?: CommsOperation[];
  //#endregion
}