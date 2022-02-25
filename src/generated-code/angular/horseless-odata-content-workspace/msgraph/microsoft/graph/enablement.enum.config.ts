//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Enablement } from './enablement.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const EnablementConfig = {
  name: 'enablement',
  members: Enablement,
  fields: {
    notConfigured: {value: 0},
    enabled: {value: 1},
    disabled: {value: 2}
  }
} as EnumTypeConfig<Enablement>;
//#endregion