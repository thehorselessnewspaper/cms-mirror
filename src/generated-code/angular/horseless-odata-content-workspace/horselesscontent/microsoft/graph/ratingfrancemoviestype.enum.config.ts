//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingFranceMoviesType } from './ratingfrancemoviestype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingFranceMoviesTypeConfig = {
  name: 'ratingFranceMoviesType',
  members: RatingFranceMoviesType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    agesAbove10: {value: 2},
    agesAbove12: {value: 3},
    agesAbove16: {value: 4},
    agesAbove18: {value: 5}
  }
} as EnumTypeConfig<RatingFranceMoviesType>;
//#endregion