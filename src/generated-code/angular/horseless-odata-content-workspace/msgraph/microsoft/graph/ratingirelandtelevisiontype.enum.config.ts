//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingIrelandTelevisionType } from './ratingirelandtelevisiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingIrelandTelevisionTypeConfig = {
  name: 'ratingIrelandTelevisionType',
  members: RatingIrelandTelevisionType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    children: {value: 3},
    youngAdults: {value: 4},
    parentalSupervision: {value: 5},
    mature: {value: 6}
  }
} as EnumTypeConfig<RatingIrelandTelevisionType>;
//#endregion