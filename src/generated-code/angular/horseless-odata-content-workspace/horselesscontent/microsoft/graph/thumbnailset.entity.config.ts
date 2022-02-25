//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThumbnailSet } from './thumbnailset.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ThumbnailSetEntityConfig = {
  name: 'thumbnailSet',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    large: {type: 'graph.thumbnail'},
    medium: {type: 'graph.thumbnail'},
    small: {type: 'graph.thumbnail'},
    source: {type: 'graph.thumbnail'}
  }
} as StructuredTypeConfig<ThumbnailSet>;
//#endregion