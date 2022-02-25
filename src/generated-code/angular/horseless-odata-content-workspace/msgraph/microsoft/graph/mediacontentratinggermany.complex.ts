//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingGermanyMoviesType } from './ratinggermanymoviestype.enum';
import { RatingGermanyTelevisionType } from './ratinggermanytelevisiontype.enum';
//#endregion

export interface MediaContentRatingGermany {
  //#region ODataApiGen Properties
  movieRating: RatingGermanyMoviesType;
  tvRating: RatingGermanyTelevisionType;
  //#endregion
}