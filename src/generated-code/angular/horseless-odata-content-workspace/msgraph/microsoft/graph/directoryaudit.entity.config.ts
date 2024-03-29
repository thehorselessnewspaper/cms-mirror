﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryAudit } from './directoryaudit.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DirectoryAuditEntityConfig = {
  name: 'directoryAudit',
  base: 'microsoft.graph.entity',
  fields: {
    category: {type: 'Edm.String', nullable: false},
    correlationId: {type: 'Edm.String'},
    result: {type: 'graph.operationResult'},
    resultReason: {type: 'Edm.String'},
    activityDisplayName: {type: 'Edm.String', nullable: false},
    activityDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    loggedByService: {type: 'Edm.String'},
    operationType: {type: 'Edm.String'},
    initiatedBy: {type: 'graph.auditActivityInitiator', nullable: false},
    targetResources: {type: 'graph.targetResource', collection: true},
    additionalDetails: {type: 'graph.keyValue', collection: true}
  }
} as StructuredTypeConfig<DirectoryAudit>;
//#endregion