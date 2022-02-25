//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OutlookItem } from './outlookitem.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OutlookItemEntityConfig = {
  name: 'outlookItem',
  base: 'microsoft.graph.entity',
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    changeKey: {type: 'Edm.String'},
    categories: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<OutlookItem>;
//#endregion