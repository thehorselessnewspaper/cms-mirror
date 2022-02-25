//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingUnitedKingdomTelevisionType } from './ratingunitedkingdomtelevisiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingUnitedKingdomTelevisionTypeConfig = {
  name: 'ratingUnitedKingdomTelevisionType',
  members: RatingUnitedKingdomTelevisionType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    caution: {value: 2}
  }
} as EnumTypeConfig<RatingUnitedKingdomTelevisionType>;
//#endregion