//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingUnitedKingdomMoviesType } from './ratingunitedkingdommoviestype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingUnitedKingdomMoviesTypeConfig = {
  name: 'ratingUnitedKingdomMoviesType',
  members: RatingUnitedKingdomMoviesType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    universalChildren: {value: 3},
    parentalGuidance: {value: 4},
    agesAbove12Video: {value: 5},
    agesAbove12Cinema: {value: 6},
    agesAbove15: {value: 7},
    adults: {value: 8}
  }
} as EnumTypeConfig<RatingUnitedKingdomMoviesType>;
//#endregion