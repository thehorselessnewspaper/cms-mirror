//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AndroidMinimumOperatingSystemComplexConfig = {
  name: 'androidMinimumOperatingSystem',
  fields: {
    v4_0: {type: 'Edm.Boolean', nullable: false},
    v4_0_3: {type: 'Edm.Boolean', nullable: false},
    v4_1: {type: 'Edm.Boolean', nullable: false},
    v4_2: {type: 'Edm.Boolean', nullable: false},
    v4_3: {type: 'Edm.Boolean', nullable: false},
    v4_4: {type: 'Edm.Boolean', nullable: false},
    v5_0: {type: 'Edm.Boolean', nullable: false},
    v5_1: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<AndroidMinimumOperatingSystem>;
//#endregion