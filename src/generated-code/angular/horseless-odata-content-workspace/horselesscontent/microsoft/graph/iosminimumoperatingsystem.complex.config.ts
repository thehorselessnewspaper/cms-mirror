//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosMinimumOperatingSystemComplexConfig = {
  name: 'iosMinimumOperatingSystem',
  fields: {
    v8_0: {type: 'Edm.Boolean', nullable: false},
    v9_0: {type: 'Edm.Boolean', nullable: false},
    v10_0: {type: 'Edm.Boolean', nullable: false},
    v11_0: {type: 'Edm.Boolean', nullable: false},
    v12_0: {type: 'Edm.Boolean', nullable: false},
    v13_0: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<IosMinimumOperatingSystem>;
//#endregion