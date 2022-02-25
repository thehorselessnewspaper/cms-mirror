//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingUnitedKingdomMoviesType } from './ratingunitedkingdommoviestype.enum';
import { RatingUnitedKingdomTelevisionType } from './ratingunitedkingdomtelevisiontype.enum';
//#endregion

export interface MediaContentRatingUnitedKingdom {
  //#region ODataApiGen Properties
  movieRating: RatingUnitedKingdomMoviesType;
  tvRating: RatingUnitedKingdomTelevisionType;
  //#endregion
}