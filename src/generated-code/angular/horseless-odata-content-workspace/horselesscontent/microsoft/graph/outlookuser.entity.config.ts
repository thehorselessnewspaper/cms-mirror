//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OutlookUser } from './outlookuser.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OutlookUserEntityConfig = {
  name: 'outlookUser',
  base: 'microsoft.graph.entity',
  fields: {
    masterCategories: {type: 'graph.outlookCategory', collection: true, navigation: true}
  }
} as StructuredTypeConfig<OutlookUser>;
//#endregion