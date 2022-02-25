//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerService } from './planner.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PlannerServiceEntitySetConfig = {
  name: 'planner',
  entityType: 'microsoft.graph.planner',
  service: PlannerService
} as EntitySetConfig;
//#endregion