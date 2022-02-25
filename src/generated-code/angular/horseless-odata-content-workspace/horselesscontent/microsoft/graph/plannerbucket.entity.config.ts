//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerBucket } from './plannerbucket.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerBucketEntityConfig = {
  name: 'plannerBucket',
  base: 'microsoft.graph.entity',
  fields: {
    name: {type: 'Edm.String', nullable: false},
    planId: {type: 'Edm.String'},
    orderHint: {type: 'Edm.String'},
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true}
  }
} as StructuredTypeConfig<PlannerBucket>;
//#endregion