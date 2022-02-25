//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserFeedback } from './userfeedback.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UserFeedbackComplexConfig = {
  name: 'userFeedback',
  fields: {
    text: {type: 'Edm.String'},
    rating: {type: 'microsoft.graph.callRecords.userFeedbackRating', nullable: false},
    tokens: {type: 'microsoft.graph.callRecords.feedbackTokenSet'}
  }
} as StructuredTypeConfig<UserFeedback>;
//#endregion