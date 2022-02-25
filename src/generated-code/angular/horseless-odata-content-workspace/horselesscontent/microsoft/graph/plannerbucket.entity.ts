//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { PlannerTask } from './plannertask.entity';
//#endregion

export interface PlannerBucket extends Entity {
  //#region ODataApiGen Properties
  name: string;
  planId?: string;
  orderHint?: string;
  tasks?: PlannerTask[];
  //#endregion
}