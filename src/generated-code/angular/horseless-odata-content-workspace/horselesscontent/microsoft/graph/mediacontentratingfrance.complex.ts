//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingFranceMoviesType } from './ratingfrancemoviestype.enum';
import { RatingFranceTelevisionType } from './ratingfrancetelevisiontype.enum';
//#endregion

export interface MediaContentRatingFrance {
  //#region ODataApiGen Properties
  movieRating: RatingFranceMoviesType;
  tvRating: RatingFranceTelevisionType;
  //#endregion
}