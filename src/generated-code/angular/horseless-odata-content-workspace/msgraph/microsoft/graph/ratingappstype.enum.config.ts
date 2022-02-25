//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RatingAppsType } from './ratingappstype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RatingAppsTypeConfig = {
  name: 'ratingAppsType',
  members: RatingAppsType,
  fields: {
    allAllowed: {value: 0},
    allBlocked: {value: 1},
    agesAbove4: {value: 2},
    agesAbove9: {value: 3},
    agesAbove12: {value: 4},
    agesAbove17: {value: 5}
  }
} as EnumTypeConfig<RatingAppsType>;
//#endregion