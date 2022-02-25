//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { PlannerPlan } from './plannerplan.entity';
//#endregion

export interface PlannerGroup extends Entity {
  //#region ODataApiGen Properties
  plans?: PlannerPlan[];
  //#endregion
}