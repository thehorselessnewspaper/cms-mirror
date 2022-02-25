//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OutlookCategory } from './outlookcategory.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OutlookCategoryEntityConfig = {
  name: 'outlookCategory',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    color: {type: 'graph.categoryColor'}
  }
} as StructuredTypeConfig<OutlookCategory>;
//#endregion