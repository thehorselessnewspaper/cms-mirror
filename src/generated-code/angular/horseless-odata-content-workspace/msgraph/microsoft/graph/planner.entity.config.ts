//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Planner } from './planner.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerEntityConfig = {
  name: 'planner',
  base: 'microsoft.graph.entity',
  fields: {
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true},
    plans: {type: 'graph.plannerPlan', collection: true, navigation: true},
    buckets: {type: 'graph.plannerBucket', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Planner>;
//#endregion