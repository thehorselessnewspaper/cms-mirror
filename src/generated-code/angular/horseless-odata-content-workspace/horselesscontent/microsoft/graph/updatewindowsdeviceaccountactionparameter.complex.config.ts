//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UpdateWindowsDeviceAccountActionParameter } from './updatewindowsdeviceaccountactionparameter.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UpdateWindowsDeviceAccountActionParameterComplexConfig = {
  name: 'updateWindowsDeviceAccountActionParameter',
  fields: {
    deviceAccount: {type: 'graph.windowsDeviceAccount'},
    passwordRotationEnabled: {type: 'Edm.Boolean'},
    calendarSyncEnabled: {type: 'Edm.Boolean'},
    deviceAccountEmail: {type: 'Edm.String'},
    exchangeServer: {type: 'Edm.String'},
    sessionInitiationProtocalAddress: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<UpdateWindowsDeviceAccountActionParameter>;
//#endregion