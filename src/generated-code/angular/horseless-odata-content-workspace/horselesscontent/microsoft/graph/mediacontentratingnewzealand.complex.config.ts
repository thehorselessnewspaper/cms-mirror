//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaContentRatingNewZealand } from './mediacontentratingnewzealand.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaContentRatingNewZealandComplexConfig = {
  name: 'mediaContentRatingNewZealand',
  fields: {
    movieRating: {type: 'graph.ratingNewZealandMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingNewZealandTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingNewZealand>;
//#endregion