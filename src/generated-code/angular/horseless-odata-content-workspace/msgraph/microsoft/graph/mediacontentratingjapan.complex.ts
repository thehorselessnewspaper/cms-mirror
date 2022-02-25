//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingJapanMoviesType } from './ratingjapanmoviestype.enum';
import { RatingJapanTelevisionType } from './ratingjapantelevisiontype.enum';
//#endregion

export interface MediaContentRatingJapan {
  //#region ODataApiGen Properties
  movieRating: RatingJapanMoviesType;
  tvRating: RatingJapanTelevisionType;
  //#endregion
}