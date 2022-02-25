//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedBrowserType } from './managedbrowsertype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagedBrowserTypeConfig = {
  name: 'managedBrowserType',
  flags: true,
  members: ManagedBrowserType,
  fields: {
    notConfigured: {value: 0},
    microsoftEdge: {value: 1}
  }
} as EnumTypeConfig<ManagedBrowserType>;
//#endregion