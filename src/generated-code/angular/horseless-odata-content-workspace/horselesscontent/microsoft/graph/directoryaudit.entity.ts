//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { OperationResult } from './operationresult.enum';
import { AuditActivityInitiator } from './auditactivityinitiator.complex';
import { TargetResource } from './targetresource.complex';
import { KeyValue } from './keyvalue.complex';
//#endregion

export interface DirectoryAudit extends Entity {
  //#region ODataApiGen Properties
  category: string;
  correlationId?: string;
  result?: OperationResult;
  resultReason?: string;
  activityDisplayName: string;
  activityDateTime: Date;
  loggedByService?: string;
  operationType?: string;
  initiatedBy: AuditActivityInitiator;
  targetResources?: TargetResource[];
  additionalDetails?: KeyValue[];
  //#endregion
}