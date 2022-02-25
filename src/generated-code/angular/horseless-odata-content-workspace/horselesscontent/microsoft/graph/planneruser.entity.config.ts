//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerUser } from './planneruser.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerUserEntityConfig = {
  name: 'plannerUser',
  base: 'microsoft.graph.entity',
  fields: {
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true},
    plans: {type: 'graph.plannerPlan', collection: true, navigation: true}
  }
} as StructuredTypeConfig<PlannerUser>;
//#endregion