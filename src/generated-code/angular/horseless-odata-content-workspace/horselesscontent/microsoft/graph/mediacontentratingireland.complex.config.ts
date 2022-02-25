//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaContentRatingIreland } from './mediacontentratingireland.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaContentRatingIrelandComplexConfig = {
  name: 'mediaContentRatingIreland',
  fields: {
    movieRating: {type: 'graph.ratingIrelandMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingIrelandTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingIreland>;
//#endregion