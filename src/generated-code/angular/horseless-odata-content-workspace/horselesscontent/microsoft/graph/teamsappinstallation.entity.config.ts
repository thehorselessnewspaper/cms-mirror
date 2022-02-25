//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamsAppInstallation } from './teamsappinstallation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamsAppInstallationEntityConfig = {
  name: 'teamsAppInstallation',
  base: 'microsoft.graph.entity',
  fields: {
    teamsApp: {type: 'graph.teamsApp', navigation: true},
    teamsAppDefinition: {type: 'graph.teamsAppDefinition', navigation: true}
  }
} as StructuredTypeConfig<TeamsAppInstallation>;
//#endregion