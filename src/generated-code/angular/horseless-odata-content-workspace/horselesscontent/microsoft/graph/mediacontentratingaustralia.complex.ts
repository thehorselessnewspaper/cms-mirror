//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingAustraliaMoviesType } from './ratingaustraliamoviestype.enum';
import { RatingAustraliaTelevisionType } from './ratingaustraliatelevisiontype.enum';
//#endregion

export interface MediaContentRatingAustralia {
  //#region ODataApiGen Properties
  movieRating: RatingAustraliaMoviesType;
  tvRating: RatingAustraliaTelevisionType;
  //#endregion
}