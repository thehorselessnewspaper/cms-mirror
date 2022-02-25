//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AuditLogRoot } from './auditlogroot.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AuditLogRootEntityConfig = {
  name: 'auditLogRoot',
  base: 'microsoft.graph.entity',
  fields: {
    signIns: {type: 'graph.signIn', collection: true, navigation: true},
    directoryAudits: {type: 'graph.directoryAudit', collection: true, navigation: true},
    restrictedSignIns: {type: 'graph.restrictedSignIn', collection: true, navigation: true}
  }
} as StructuredTypeConfig<AuditLogRoot>;
//#endregion