//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaContentRatingJapan } from './mediacontentratingjapan.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaContentRatingJapanComplexConfig = {
  name: 'mediaContentRatingJapan',
  fields: {
    movieRating: {type: 'graph.ratingJapanMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingJapanTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingJapan>;
//#endregion