//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingAustraliaMoviesType } from './ratingaustraliamoviestype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingAustraliaMoviesTypeConfig = {
  name: 'ratingAustraliaMoviesType',
  members: RatingAustraliaMoviesType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    parentalGuidance: {value: 3},
    mature: {value: 4},
    agesAbove15: {value: 5},
    agesAbove18: {value: 6}
  }
} as EnumTypeConfig<RatingAustraliaMoviesType>;
//#endregion