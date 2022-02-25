//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingJapanMoviesType } from './ratingjapanmoviestype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingJapanMoviesTypeConfig = {
  name: 'ratingJapanMoviesType',
  members: RatingJapanMoviesType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    parentalGuidance: {value: 3},
    agesAbove15: {value: 4},
    agesAbove18: {value: 5}
  }
} as EnumTypeConfig<RatingJapanMoviesType>;
//#endregion