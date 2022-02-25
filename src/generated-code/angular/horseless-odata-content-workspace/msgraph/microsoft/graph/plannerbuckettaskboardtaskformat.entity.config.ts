//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerBucketTaskBoardTaskFormat } from './plannerbuckettaskboardtaskformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerBucketTaskBoardTaskFormatEntityConfig = {
  name: 'plannerBucketTaskBoardTaskFormat',
  base: 'microsoft.graph.entity',
  fields: {
    orderHint: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PlannerBucketTaskBoardTaskFormat>;
//#endregion