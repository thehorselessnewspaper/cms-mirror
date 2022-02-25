//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ListItemVersion } from './listitemversion.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ListItemVersionEntityConfig = {
  name: 'listItemVersion',
  base: 'microsoft.graph.baseItemVersion',
  fields: {
    fields: {type: 'graph.fieldValueSet', navigation: true}
  }
} as StructuredTypeConfig<ListItemVersion>;
//#endregion