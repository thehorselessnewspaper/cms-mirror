//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductFamily } from './productfamily.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ProductFamilyConfig = {
  name: 'productFamily',
  members: ProductFamily,
  fields: {
    unknown: {value: 0},
    teams: {value: 1},
    skypeForBusiness: {value: 2},
    lync: {value: 3},
    unknownFutureValue: {value: 4}
  }
} as EnumTypeConfig<ProductFamily>;
//#endregion