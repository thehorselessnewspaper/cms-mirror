//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingNewZealandMoviesType } from './ratingnewzealandmoviestype.enum';
import { RatingNewZealandTelevisionType } from './ratingnewzealandtelevisiontype.enum';
//#endregion

export interface MediaContentRatingNewZealand {
  //#region ODataApiGen Properties
  movieRating: RatingNewZealandMoviesType;
  tvRating: RatingNewZealandTelevisionType;
  //#endregion
}