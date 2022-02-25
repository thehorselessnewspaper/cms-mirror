//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { PlannerUserIds } from './planneruserids.complex';
import { PlannerCategoryDescriptions } from './plannercategorydescriptions.complex';
//#endregion

export interface PlannerPlanDetails extends Entity {
  //#region ODataApiGen Properties
  sharedWith?: PlannerUserIds;
  categoryDescriptions?: PlannerCategoryDescriptions;
  //#endregion
}