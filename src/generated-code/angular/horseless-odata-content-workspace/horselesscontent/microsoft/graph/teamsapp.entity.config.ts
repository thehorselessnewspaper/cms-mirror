//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamsApp } from './teamsapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamsAppEntityConfig = {
  name: 'teamsApp',
  base: 'microsoft.graph.entity',
  fields: {
    externalId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    distributionMethod: {type: 'graph.teamsAppDistributionMethod'},
    appDefinitions: {type: 'graph.teamsAppDefinition', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TeamsApp>;
//#endregion