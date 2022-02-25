//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { PlannerOrderHintsByAssignee } from './plannerorderhintsbyassignee.complex';
//#endregion

export interface PlannerAssignedToTaskBoardTaskFormat extends Entity {
  //#region ODataApiGen Properties
  unassignedOrderHint?: string;
  orderHintsByAssignee?: PlannerOrderHintsByAssignee;
  //#endregion
}