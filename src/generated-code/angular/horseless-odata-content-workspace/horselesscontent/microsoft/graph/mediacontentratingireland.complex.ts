//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingIrelandMoviesType } from './ratingirelandmoviestype.enum';
import { RatingIrelandTelevisionType } from './ratingirelandtelevisiontype.enum';
//#endregion

export interface MediaContentRatingIreland {
  //#region ODataApiGen Properties
  movieRating: RatingIrelandMoviesType;
  tvRating: RatingIrelandTelevisionType;
  //#endregion
}