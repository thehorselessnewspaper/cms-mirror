//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamworkService } from './teamwork.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TeamworkServiceEntitySetConfig = {
  name: 'teamwork',
  entityType: 'microsoft.graph.teamwork',
  service: TeamworkService
} as EntitySetConfig;
//#endregion