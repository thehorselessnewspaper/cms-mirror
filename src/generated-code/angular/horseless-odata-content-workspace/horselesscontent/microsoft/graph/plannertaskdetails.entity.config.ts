//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerTaskDetails } from './plannertaskdetails.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerTaskDetailsEntityConfig = {
  name: 'plannerTaskDetails',
  base: 'microsoft.graph.entity',
  fields: {
    description: {type: 'Edm.String'},
    previewType: {type: 'graph.plannerPreviewType'},
    references: {type: 'graph.plannerExternalReferences'},
    checklist: {type: 'graph.plannerChecklistItems'}
  }
} as StructuredTypeConfig<PlannerTaskDetails>;
//#endregion