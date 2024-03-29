﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerTask } from './plannertask.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerTaskEntityConfig = {
  name: 'plannerTask',
  base: 'microsoft.graph.entity',
  fields: {
    createdBy: {type: 'graph.identitySet'},
    planId: {type: 'Edm.String'},
    bucketId: {type: 'Edm.String'},
    title: {type: 'Edm.String', nullable: false},
    orderHint: {type: 'Edm.String'},
    assigneePriority: {type: 'Edm.String'},
    percentComplete: {type: 'Edm.Int32'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    dueDateTime: {type: 'Edm.DateTimeOffset'},
    hasDescription: {type: 'Edm.Boolean'},
    previewType: {type: 'graph.plannerPreviewType'},
    completedDateTime: {type: 'Edm.DateTimeOffset'},
    completedBy: {type: 'graph.identitySet'},
    referenceCount: {type: 'Edm.Int32'},
    checklistItemCount: {type: 'Edm.Int32'},
    activeChecklistItemCount: {type: 'Edm.Int32'},
    appliedCategories: {type: 'graph.plannerAppliedCategories'},
    assignments: {type: 'graph.plannerAssignments'},
    conversationThreadId: {type: 'Edm.String'},
    details: {type: 'graph.plannerTaskDetails', navigation: true},
    assignedToTaskBoardFormat: {type: 'graph.plannerAssignedToTaskBoardTaskFormat', navigation: true},
    progressTaskBoardFormat: {type: 'graph.plannerProgressTaskBoardTaskFormat', navigation: true},
    bucketTaskBoardFormat: {type: 'graph.plannerBucketTaskBoardTaskFormat', navigation: true}
  }
} as StructuredTypeConfig<PlannerTask>;
//#endregion