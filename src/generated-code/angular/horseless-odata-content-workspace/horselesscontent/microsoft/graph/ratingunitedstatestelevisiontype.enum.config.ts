//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingUnitedStatesTelevisionType } from './ratingunitedstatestelevisiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingUnitedStatesTelevisionTypeConfig = {
  name: 'ratingUnitedStatesTelevisionType',
  members: RatingUnitedStatesTelevisionType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    childrenAll: {value: 2},
    childrenAbove7: {value: 3},
    general: {value: 4},
    parentalGuidance: {value: 5},
    childrenAbove14: {value: 6},
    adults: {value: 7}
  }
} as EnumTypeConfig<RatingUnitedStatesTelevisionType>;
//#endregion