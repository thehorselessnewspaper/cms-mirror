//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppRoleAssignment } from './approleassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AppRoleAssignmentEntityConfig = {
  name: 'appRoleAssignment',
  base: 'microsoft.graph.directoryObject',
  fields: {
    appRoleId: {type: 'Edm.Guid', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    principalDisplayName: {type: 'Edm.String'},
    principalId: {type: 'Edm.Guid'},
    principalType: {type: 'Edm.String'},
    resourceDisplayName: {type: 'Edm.String'},
    resourceId: {type: 'Edm.Guid'}
  }
} as StructuredTypeConfig<AppRoleAssignment>;
//#endregion