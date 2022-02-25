//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeleteUserFromSharedAppleDeviceActionResult } from './deleteuserfromsharedappledeviceactionresult.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeleteUserFromSharedAppleDeviceActionResultComplexConfig = {
  name: 'deleteUserFromSharedAppleDeviceActionResult',
  base: 'microsoft.graph.deviceActionResult',
  fields: {
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeleteUserFromSharedAppleDeviceActionResult>;
//#endregion