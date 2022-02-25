//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaContentRatingUnitedStates } from './mediacontentratingunitedstates.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaContentRatingUnitedStatesComplexConfig = {
  name: 'mediaContentRatingUnitedStates',
  fields: {
    movieRating: {type: 'graph.ratingUnitedStatesMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingUnitedStatesTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingUnitedStates>;
//#endregion