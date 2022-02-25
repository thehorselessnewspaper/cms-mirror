//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaContentRatingUnitedKingdom } from './mediacontentratingunitedkingdom.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaContentRatingUnitedKingdomComplexConfig = {
  name: 'mediaContentRatingUnitedKingdom',
  fields: {
    movieRating: {type: 'graph.ratingUnitedKingdomMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingUnitedKingdomTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingUnitedKingdom>;
//#endregion