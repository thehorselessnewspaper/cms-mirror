//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ItemActionStat } from './itemactionstat.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ItemActionStatComplexConfig = {
  name: 'itemActionStat',
  open: true,
  fields: {
    actionCount: {type: 'Edm.Int32'},
    actorCount: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<ItemActionStat>;
//#endregion