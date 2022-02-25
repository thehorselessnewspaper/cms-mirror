//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaContentRatingCanada } from './mediacontentratingcanada.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaContentRatingCanadaComplexConfig = {
  name: 'mediaContentRatingCanada',
  fields: {
    movieRating: {type: 'graph.ratingCanadaMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingCanadaTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingCanada>;
//#endregion