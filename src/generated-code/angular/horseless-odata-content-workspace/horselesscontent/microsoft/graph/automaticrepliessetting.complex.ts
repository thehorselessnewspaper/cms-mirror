//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AutomaticRepliesStatus } from './automaticrepliesstatus.enum';
import { ExternalAudienceScope } from './externalaudiencescope.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
//#endregion

export interface AutomaticRepliesSetting {
  //#region ODataApiGen Properties
  status?: AutomaticRepliesStatus;
  externalAudience?: ExternalAudienceScope;
  scheduledStartDateTime?: DateTimeTimeZone;
  scheduledEndDateTime?: DateTimeTimeZone;
  internalReplyMessage?: string;
  externalReplyMessage?: string;
  //#endregion
}