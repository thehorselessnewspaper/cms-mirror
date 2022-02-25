//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingUnitedStatesMoviesType } from './ratingunitedstatesmoviestype.enum';
import { RatingUnitedStatesTelevisionType } from './ratingunitedstatestelevisiontype.enum';
//#endregion

export interface MediaContentRatingUnitedStates {
  //#region ODataApiGen Properties
  movieRating: RatingUnitedStatesMoviesType;
  tvRating: RatingUnitedStatesTelevisionType;
  //#endregion
}