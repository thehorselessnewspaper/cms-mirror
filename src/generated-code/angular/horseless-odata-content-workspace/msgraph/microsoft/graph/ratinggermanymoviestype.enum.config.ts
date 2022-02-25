//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingGermanyMoviesType } from './ratinggermanymoviestype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingGermanyMoviesTypeConfig = {
  name: 'ratingGermanyMoviesType',
  members: RatingGermanyMoviesType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    agesAbove6: {value: 3},
    agesAbove12: {value: 4},
    agesAbove16: {value: 5},
    adults: {value: 6}
  }
} as EnumTypeConfig<RatingGermanyMoviesType>;
//#endregion