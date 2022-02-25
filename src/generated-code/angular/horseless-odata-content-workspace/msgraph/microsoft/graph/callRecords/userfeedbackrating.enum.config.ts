//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserFeedbackRating } from './userfeedbackrating.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const UserFeedbackRatingConfig = {
  name: 'userFeedbackRating',
  members: UserFeedbackRating,
  fields: {
    notRated: {value: 0},
    bad: {value: 1},
    poor: {value: 2},
    fair: {value: 3},
    good: {value: 4},
    excellent: {value: 5},
    unknownFutureValue: {value: 6}
  }
} as EnumTypeConfig<UserFeedbackRating>;
//#endregion