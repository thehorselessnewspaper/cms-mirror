//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingJapanTelevisionType } from './ratingjapantelevisiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingJapanTelevisionTypeConfig = {
  name: 'ratingJapanTelevisionType',
  members: RatingJapanTelevisionType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    explicitAllowed: {value: 2}
  }
} as EnumTypeConfig<RatingJapanTelevisionType>;
//#endregion