//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AuditActivityInitiator } from './auditactivityinitiator.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AuditActivityInitiatorComplexConfig = {
  name: 'auditActivityInitiator',
  fields: {
    user: {type: 'graph.userIdentity'},
    app: {type: 'graph.appIdentity'}
  }
} as StructuredTypeConfig<AuditActivityInitiator>;
//#endregion