//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsMinimumOperatingSystem } from './windowsminimumoperatingsystem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsMinimumOperatingSystemComplexConfig = {
  name: 'windowsMinimumOperatingSystem',
  fields: {
    v8_0: {type: 'Edm.Boolean', nullable: false},
    v8_1: {type: 'Edm.Boolean', nullable: false},
    v10_0: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WindowsMinimumOperatingSystem>;
//#endregion