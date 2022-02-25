//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ThreatAssessmentRequestEntityConfig = {
  name: 'threatAssessmentRequest',
  base: 'microsoft.graph.entity',
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    contentType: {type: 'graph.threatAssessmentContentType'},
    expectedAssessment: {type: 'graph.threatExpectedAssessment', nullable: false},
    category: {type: 'graph.threatCategory', nullable: false},
    status: {type: 'graph.threatAssessmentStatus'},
    requestSource: {type: 'graph.threatAssessmentRequestSource'},
    createdBy: {type: 'graph.identitySet'},
    results: {type: 'graph.threatAssessmentResult', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ThreatAssessmentRequest>;
//#endregion