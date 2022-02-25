//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaContentRatingAustralia } from './mediacontentratingaustralia.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaContentRatingAustraliaComplexConfig = {
  name: 'mediaContentRatingAustralia',
  fields: {
    movieRating: {type: 'graph.ratingAustraliaMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingAustraliaTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingAustralia>;
//#endregion