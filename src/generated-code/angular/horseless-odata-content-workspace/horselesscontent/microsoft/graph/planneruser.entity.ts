//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerPlan } from './plannerplan.entity';
//#endregion

export interface PlannerUser extends Entity {
  //#region ODataApiGen Properties
  tasks?: PlannerTask[];
  plans?: PlannerPlan[];
  //#endregion
}