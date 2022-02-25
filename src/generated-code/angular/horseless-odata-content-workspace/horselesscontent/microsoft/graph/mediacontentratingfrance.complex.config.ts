//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaContentRatingFrance } from './mediacontentratingfrance.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaContentRatingFranceComplexConfig = {
  name: 'mediaContentRatingFrance',
  fields: {
    movieRating: {type: 'graph.ratingFranceMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingFranceTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingFrance>;
//#endregion