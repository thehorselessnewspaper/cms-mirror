//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AuditLogsService } from './auditlogs.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const AuditLogsServiceEntitySetConfig = {
  name: 'auditLogs',
  entityType: 'microsoft.graph.auditLogRoot',
  service: AuditLogsService
} as EntitySetConfig;
//#endregion