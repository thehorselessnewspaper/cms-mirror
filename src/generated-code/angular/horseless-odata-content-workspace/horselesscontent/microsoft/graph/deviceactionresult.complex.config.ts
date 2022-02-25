//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceActionResult } from './deviceactionresult.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceActionResultComplexConfig = {
  name: 'deviceActionResult',
  fields: {
    actionName: {type: 'Edm.String'},
    actionState: {type: 'graph.actionState', nullable: false},
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastUpdatedDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as StructuredTypeConfig<DeviceActionResult>;
//#endregion