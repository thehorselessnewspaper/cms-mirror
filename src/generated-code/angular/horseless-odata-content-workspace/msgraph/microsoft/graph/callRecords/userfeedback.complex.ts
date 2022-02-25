//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserFeedbackRating } from './userfeedbackrating.enum';
import { FeedbackTokenSet } from './feedbacktokenset.complex';
//#endregion

export interface UserFeedback {
  //#region ODataApiGen Properties
  text?: string;
  rating: UserFeedbackRating;
  tokens?: FeedbackTokenSet;
  //#endregion
}