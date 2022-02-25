//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ColumnLink } from './columnlink.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ColumnLinkEntityConfig = {
  name: 'columnLink',
  base: 'microsoft.graph.entity',
  fields: {
    name: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ColumnLink>;
//#endregion