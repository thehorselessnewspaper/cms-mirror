//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerPlan } from './plannerplan.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerPlanEntityConfig = {
  name: 'plannerPlan',
  base: 'microsoft.graph.entity',
  fields: {
    createdBy: {type: 'graph.identitySet'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    owner: {type: 'Edm.String'},
    title: {type: 'Edm.String', nullable: false},
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true},
    buckets: {type: 'graph.plannerBucket', collection: true, navigation: true},
    details: {type: 'graph.plannerPlanDetails', navigation: true}
  }
} as StructuredTypeConfig<PlannerPlan>;
//#endregion