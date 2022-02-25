//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingUnitedStatesMoviesType } from './ratingunitedstatesmoviestype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingUnitedStatesMoviesTypeConfig = {
  name: 'ratingUnitedStatesMoviesType',
  members: RatingUnitedStatesMoviesType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    parentalGuidance: {value: 3},
    parentalGuidance13: {value: 4},
    restricted: {value: 5},
    adults: {value: 6}
  }
} as EnumTypeConfig<RatingUnitedStatesMoviesType>;
//#endregion