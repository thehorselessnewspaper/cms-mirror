//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSettingDateTime } from './omasettingdatetime.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OmaSettingDateTimeComplexConfig = {
  name: 'omaSettingDateTime',
  base: 'microsoft.graph.omaSetting',
  fields: {
    value: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as StructuredTypeConfig<OmaSettingDateTime>;
//#endregion