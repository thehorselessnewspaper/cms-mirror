//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PreAuthorizedApplication } from './preauthorizedapplication.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PreAuthorizedApplicationComplexConfig = {
  name: 'preAuthorizedApplication',
  fields: {
    appId: {type: 'Edm.String'},
    delegatedPermissionIds: {type: 'Edm.String', nullable: false, collection: true}
  }
} as StructuredTypeConfig<PreAuthorizedApplication>;
//#endregion