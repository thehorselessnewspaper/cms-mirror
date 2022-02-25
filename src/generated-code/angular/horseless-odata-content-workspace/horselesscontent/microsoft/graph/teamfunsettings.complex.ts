//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GiphyRatingType } from './giphyratingtype.enum';
//#endregion

export interface TeamFunSettings {
  //#region ODataApiGen Properties
  allowGiphy?: boolean;
  giphyContentRating?: GiphyRatingType;
  allowStickersAndMemes?: boolean;
  allowCustomMemes?: boolean;
  //#endregion
}