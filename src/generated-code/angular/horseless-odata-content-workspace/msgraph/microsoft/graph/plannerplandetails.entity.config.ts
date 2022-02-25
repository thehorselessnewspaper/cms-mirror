//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerPlanDetails } from './plannerplandetails.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerPlanDetailsEntityConfig = {
  name: 'plannerPlanDetails',
  base: 'microsoft.graph.entity',
  fields: {
    sharedWith: {type: 'graph.plannerUserIds'},
    categoryDescriptions: {type: 'graph.plannerCategoryDescriptions'}
  }
} as StructuredTypeConfig<PlannerPlanDetails>;
//#endregion