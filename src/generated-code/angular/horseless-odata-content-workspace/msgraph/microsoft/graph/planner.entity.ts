//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerBucket } from './plannerbucket.entity';
//#endregion

export interface Planner extends Entity {
  //#region ODataApiGen Properties
  tasks?: PlannerTask[];
  plans?: PlannerPlan[];
  buckets?: PlannerBucket[];
  //#endregion
}