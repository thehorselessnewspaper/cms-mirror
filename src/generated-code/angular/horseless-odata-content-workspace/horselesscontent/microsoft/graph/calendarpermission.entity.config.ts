//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarPermission } from './calendarpermission.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CalendarPermissionEntityConfig = {
  name: 'calendarPermission',
  base: 'microsoft.graph.entity',
  fields: {
    emailAddress: {type: 'graph.emailAddress'},
    isRemovable: {type: 'Edm.Boolean'},
    isInsideOrganization: {type: 'Edm.Boolean'},
    role: {type: 'graph.calendarRoleType'},
    allowedRoles: {type: 'graph.calendarRoleType', collection: true}
  }
} as StructuredTypeConfig<CalendarPermission>;
//#endregion