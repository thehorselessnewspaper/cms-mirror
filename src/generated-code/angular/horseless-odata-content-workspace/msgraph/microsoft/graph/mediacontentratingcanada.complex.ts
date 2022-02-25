//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingCanadaMoviesType } from './ratingcanadamoviestype.enum';
import { RatingCanadaTelevisionType } from './ratingcanadatelevisiontype.enum';
//#endregion

export interface MediaContentRatingCanada {
  //#region ODataApiGen Properties
  movieRating: RatingCanadaMoviesType;
  tvRating: RatingCanadaTelevisionType;
  //#endregion
}