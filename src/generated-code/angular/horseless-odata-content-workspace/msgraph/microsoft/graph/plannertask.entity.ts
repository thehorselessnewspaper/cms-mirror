//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { PlannerPreviewType } from './plannerpreviewtype.enum';
import { IdentitySet } from './identityset.complex';
import { PlannerAppliedCategories } from './plannerappliedcategories.complex';
import { PlannerAssignments } from './plannerassignments.complex';
import { PlannerTaskDetails } from './plannertaskdetails.entity';
import { PlannerAssignedToTaskBoardTaskFormat } from './plannerassignedtotaskboardtaskformat.entity';
import { PlannerProgressTaskBoardTaskFormat } from './plannerprogresstaskboardtaskformat.entity';
import { PlannerBucketTaskBoardTaskFormat } from './plannerbuckettaskboardtaskformat.entity';
//#endregion

export interface PlannerTask extends Entity {
  //#region ODataApiGen Properties
  createdBy?: IdentitySet;
  planId?: string;
  bucketId?: string;
  title: string;
  orderHint?: string;
  assigneePriority?: string;
  percentComplete?: number;
  startDateTime?: Date;
  createdDateTime?: Date;
  dueDateTime?: Date;
  hasDescription?: boolean;
  previewType?: PlannerPreviewType;
  completedDateTime?: Date;
  completedBy?: IdentitySet;
  referenceCount?: number;
  checklistItemCount?: number;
  activeChecklistItemCount?: number;
  appliedCategories?: PlannerAppliedCategories;
  assignments?: PlannerAssignments;
  conversationThreadId?: string;
  details?: PlannerTaskDetails;
  assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormat;
  progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormat;
  bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormat;
  //#endregion
}