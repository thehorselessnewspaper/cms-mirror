//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GiphyRatingType } from './giphyratingtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const GiphyRatingTypeConfig = {
  name: 'giphyRatingType',
  members: GiphyRatingType,
  fields: {
    strict: {value: 0},
    moderate: {value: 1},
    unknownFutureValue: {value: 2}
  }
} as EnumTypeConfig<GiphyRatingType>;
//#endregion