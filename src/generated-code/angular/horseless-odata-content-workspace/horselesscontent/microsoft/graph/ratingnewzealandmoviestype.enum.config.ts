//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingNewZealandMoviesType } from './ratingnewzealandmoviestype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingNewZealandMoviesTypeConfig = {
  name: 'ratingNewZealandMoviesType',
  members: RatingNewZealandMoviesType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    parentalGuidance: {value: 3},
    mature: {value: 4},
    agesAbove13: {value: 5},
    agesAbove15: {value: 6},
    agesAbove16: {value: 7},
    agesAbove18: {value: 8},
    restricted: {value: 9},
    agesAbove16Restricted: {value: 10}
  }
} as EnumTypeConfig<RatingNewZealandMoviesType>;
//#endregion