//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamsAppDistributionMethod } from './teamsappdistributionmethod.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const TeamsAppDistributionMethodConfig = {
  name: 'teamsAppDistributionMethod',
  members: TeamsAppDistributionMethod,
  fields: {
    store: {value: 0},
    organization: {value: 1},
    sideloaded: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<TeamsAppDistributionMethod>;
//#endregion