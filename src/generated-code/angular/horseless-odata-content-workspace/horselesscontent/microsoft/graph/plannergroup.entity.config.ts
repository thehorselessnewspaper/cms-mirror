//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerGroup } from './plannergroup.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerGroupEntityConfig = {
  name: 'plannerGroup',
  base: 'microsoft.graph.entity',
  fields: {
    plans: {type: 'graph.plannerPlan', collection: true, navigation: true}
  }
} as StructuredTypeConfig<PlannerGroup>;
//#endregion