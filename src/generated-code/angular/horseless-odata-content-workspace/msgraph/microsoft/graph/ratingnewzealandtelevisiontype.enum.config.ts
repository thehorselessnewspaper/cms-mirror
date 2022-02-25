//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingNewZealandTelevisionType } from './ratingnewzealandtelevisiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingNewZealandTelevisionTypeConfig = {
  name: 'ratingNewZealandTelevisionType',
  members: RatingNewZealandTelevisionType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    general: {value: 2},
    parentalGuidance: {value: 3},
    adults: {value: 4}
  }
} as EnumTypeConfig<RatingNewZealandTelevisionType>;
//#endregion