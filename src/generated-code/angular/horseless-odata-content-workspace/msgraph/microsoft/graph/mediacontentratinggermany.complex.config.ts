//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaContentRatingGermany } from './mediacontentratinggermany.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaContentRatingGermanyComplexConfig = {
  name: 'mediaContentRatingGermany',
  fields: {
    movieRating: {type: 'graph.ratingGermanyMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingGermanyTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingGermany>;
//#endregion