//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamsAppDefinition } from './teamsappdefinition.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamsAppDefinitionEntityConfig = {
  name: 'teamsAppDefinition',
  base: 'microsoft.graph.entity',
  fields: {
    teamsAppId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TeamsAppDefinition>;
//#endregion