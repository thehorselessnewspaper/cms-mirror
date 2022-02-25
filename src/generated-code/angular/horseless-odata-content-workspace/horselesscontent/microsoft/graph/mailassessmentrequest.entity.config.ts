//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MailAssessmentRequest } from './mailassessmentrequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MailAssessmentRequestEntityConfig = {
  name: 'mailAssessmentRequest',
  base: 'microsoft.graph.threatAssessmentRequest',
  fields: {
    recipientEmail: {type: 'Edm.String', nullable: false},
    destinationRoutingReason: {type: 'graph.mailDestinationRoutingReason'},
    messageUri: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<MailAssessmentRequest>;
//#endregion