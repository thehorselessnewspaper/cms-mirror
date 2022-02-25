//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerAssignedToTaskBoardTaskFormat } from './plannerassignedtotaskboardtaskformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerAssignedToTaskBoardTaskFormatEntityConfig = {
  name: 'plannerAssignedToTaskBoardTaskFormat',
  base: 'microsoft.graph.entity',
  fields: {
    unassignedOrderHint: {type: 'Edm.String'},
    orderHintsByAssignee: {type: 'graph.plannerOrderHintsByAssignee'}
  }
} as StructuredTypeConfig<PlannerAssignedToTaskBoardTaskFormat>;
//#endregion