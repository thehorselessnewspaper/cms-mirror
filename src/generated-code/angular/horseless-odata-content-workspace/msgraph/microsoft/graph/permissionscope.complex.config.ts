//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PermissionScope } from './permissionscope.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PermissionScopeComplexConfig = {
  name: 'permissionScope',
  fields: {
    adminConsentDescription: {type: 'Edm.String'},
    adminConsentDisplayName: {type: 'Edm.String'},
    id: {type: 'Edm.Guid', nullable: false},
    isEnabled: {type: 'Edm.Boolean', nullable: false},
    origin: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    userConsentDescription: {type: 'Edm.String'},
    userConsentDisplayName: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PermissionScope>;
//#endregion