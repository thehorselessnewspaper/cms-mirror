//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingCanadaTelevisionType } from './ratingcanadatelevisiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingCanadaTelevisionTypeConfig = {
  name: 'ratingCanadaTelevisionType',
  members: RatingCanadaTelevisionType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    children: {value: 2},
    childrenAbove8: {value: 3},
    general: {value: 4},
    parentalGuidance: {value: 5},
    agesAbove14: {value: 6},
    agesAbove18: {value: 7}
  }
} as EnumTypeConfig<RatingCanadaTelevisionType>;
//#endregion