//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EmailFileAssessmentRequest } from './emailfileassessmentrequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EmailFileAssessmentRequestEntityConfig = {
  name: 'emailFileAssessmentRequest',
  base: 'microsoft.graph.threatAssessmentRequest',
  fields: {
    recipientEmail: {type: 'Edm.String', nullable: false},
    destinationRoutingReason: {type: 'graph.mailDestinationRoutingReason'},
    contentData: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<EmailFileAssessmentRequest>;
//#endregion