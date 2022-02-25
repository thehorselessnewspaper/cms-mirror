//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerPreviewType } from './plannerpreviewtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const PlannerPreviewTypeConfig = {
  name: 'plannerPreviewType',
  members: PlannerPreviewType,
  fields: {
    automatic: {value: 0},
    noPreview: {value: 1},
    checklist: {value: 2},
    description: {value: 3},
    reference: {value: 4}
  }
} as EnumTypeConfig<PlannerPreviewType>;
//#endregion