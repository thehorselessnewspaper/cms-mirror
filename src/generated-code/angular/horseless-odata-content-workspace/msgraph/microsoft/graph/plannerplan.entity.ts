//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.complex';
import { PlannerTask } from './plannertask.entity';
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerPlanDetails } from './plannerplandetails.entity';
//#endregion

export interface PlannerPlan extends Entity {
  //#region ODataApiGen Properties
  createdBy?: IdentitySet;
  createdDateTime?: Date;
  owner?: string;
  title: string;
  tasks?: PlannerTask[];
  buckets?: PlannerBucket[];
  details?: PlannerPlanDetails;
  //#endregion
}