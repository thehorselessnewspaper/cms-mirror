//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingCanadaMoviesType } from './ratingcanadamoviestype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingCanadaMoviesTypeConfig = {
  name: 'ratingCanadaMoviesType',
  members: RatingCanadaMoviesType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    parentalGuidance: {value: 3},
    agesAbove14: {value: 4},
    agesAbove18: {value: 5},
    restricted: {value: 6}
  }
} as EnumTypeConfig<RatingCanadaMoviesType>;
//#endregion