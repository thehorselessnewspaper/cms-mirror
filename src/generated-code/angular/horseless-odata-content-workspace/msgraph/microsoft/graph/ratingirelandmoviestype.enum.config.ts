//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingIrelandMoviesType } from './ratingirelandmoviestype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingIrelandMoviesTypeConfig = {
  name: 'ratingIrelandMoviesType',
  members: RatingIrelandMoviesType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    parentalGuidance: {value: 3},
    agesAbove12: {value: 4},
    agesAbove15: {value: 5},
    agesAbove16: {value: 6},
    adults: {value: 7}
  }
} as EnumTypeConfig<RatingIrelandMoviesType>;
//#endregion