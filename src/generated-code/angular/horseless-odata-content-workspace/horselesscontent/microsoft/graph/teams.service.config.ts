//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamsService } from './teams.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TeamsServiceEntitySetConfig = {
  name: 'teams',
  entityType: 'microsoft.graph.team',
  service: TeamsService
} as EntitySetConfig;
//#endregion