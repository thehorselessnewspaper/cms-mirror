//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PrereleaseFeatures } from './prereleasefeatures.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const PrereleaseFeaturesConfig = {
  name: 'prereleaseFeatures',
  members: PrereleaseFeatures,
  fields: {
    userDefined: {value: 0},
    settingsOnly: {value: 1},
    settingsAndExperimentations: {value: 2},
    notAllowed: {value: 3}
  }
} as EnumTypeConfig<PrereleaseFeatures>;
//#endregion