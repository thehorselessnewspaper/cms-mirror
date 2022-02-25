//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamsTabConfiguration } from './teamstabconfiguration.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamsTabConfigurationComplexConfig = {
  name: 'teamsTabConfiguration',
  open: true,
  fields: {
    entityId: {type: 'Edm.String'},
    contentUrl: {type: 'Edm.String'},
    removeUrl: {type: 'Edm.String'},
    websiteUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TeamsTabConfiguration>;
//#endregion