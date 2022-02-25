//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingGermanyTelevisionType } from './ratinggermanytelevisiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingGermanyTelevisionTypeConfig = {
  name: 'ratingGermanyTelevisionType',
  members: RatingGermanyTelevisionType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    agesAbove6: {value: 3},
    agesAbove12: {value: 4},
    agesAbove16: {value: 5},
    adults: {value: 6}
  }
} as EnumTypeConfig<RatingGermanyTelevisionType>;
//#endregion