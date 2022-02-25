//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
//#endregion

export interface MailAssessmentRequest extends ThreatAssessmentRequest {
  //#region ODataApiGen Properties
  recipientEmail: string;
  destinationRoutingReason?: MailDestinationRoutingReason;
  messageUri: string;
  //#endregion
}