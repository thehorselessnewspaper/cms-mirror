//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamsTab } from './teamstab.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamsTabEntityConfig = {
  name: 'teamsTab',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'},
    configuration: {type: 'graph.teamsTabConfiguration'},
    teamsApp: {type: 'graph.teamsApp', navigation: true}
  }
} as StructuredTypeConfig<TeamsTab>;
//#endregion