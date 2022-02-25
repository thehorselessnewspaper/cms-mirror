//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerProgressTaskBoardTaskFormat } from './plannerprogresstaskboardtaskformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerProgressTaskBoardTaskFormatEntityConfig = {
  name: 'plannerProgressTaskBoardTaskFormat',
  base: 'microsoft.graph.entity',
  fields: {
    orderHint: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PlannerProgressTaskBoardTaskFormat>;
//#endregion