//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { PlannerPreviewType } from './plannerpreviewtype.enum';
import { PlannerExternalReferences } from './plannerexternalreferences.complex';
import { PlannerChecklistItems } from './plannerchecklistitems.complex';
//#endregion

export interface PlannerTaskDetails extends Entity {
  //#region ODataApiGen Properties
  description?: string;
  previewType?: PlannerPreviewType;
  references?: PlannerExternalReferences;
  checklist?: PlannerChecklistItems;
  //#endregion
}