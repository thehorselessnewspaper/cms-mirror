//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamFunSettings } from './teamfunsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamFunSettingsComplexConfig = {
  name: 'teamFunSettings',
  fields: {
    allowGiphy: {type: 'Edm.Boolean'},
    giphyContentRating: {type: 'graph.giphyRatingType'},
    allowStickersAndMemes: {type: 'Edm.Boolean'},
    allowCustomMemes: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TeamFunSettings>;
//#endregion