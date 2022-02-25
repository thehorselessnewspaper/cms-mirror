//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingAustraliaTelevisionType } from './ratingaustraliatelevisiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingAustraliaTelevisionTypeConfig = {
  name: 'ratingAustraliaTelevisionType',
  members: RatingAustraliaTelevisionType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    preschoolers: {value: 2},
    children: {value: 3},
    general: {value: 4},
    parentalGuidance: {value: 5},
    mature: {value: 6},
    agesAbove15: {value: 7},
    agesAbove15AdultViolence: {value: 8}
  }
} as EnumTypeConfig<RatingAustraliaTelevisionType>;
//#endregion