//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResultInfo } from './resultinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ResultInfoComplexConfig = {
  name: 'resultInfo',
  fields: {
    code: {type: 'Edm.Int32', nullable: false},
    subcode: {type: 'Edm.Int32', nullable: false},
    message: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ResultInfo>;
//#endregion