//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Quota } from './quota.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const QuotaComplexConfig = {
  name: 'quota',
  fields: {
    deleted: {type: 'Edm.Int64'},
    remaining: {type: 'Edm.Int64'},
    state: {type: 'Edm.String'},
    total: {type: 'Edm.Int64'},
    used: {type: 'Edm.Int64'}
  }
} as StructuredTypeConfig<Quota>;
//#endregion