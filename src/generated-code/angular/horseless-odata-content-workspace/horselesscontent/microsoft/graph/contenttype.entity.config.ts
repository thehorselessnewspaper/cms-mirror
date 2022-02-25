//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContentType } from './contenttype.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ContentTypeEntityConfig = {
  name: 'contentType',
  base: 'microsoft.graph.entity',
  fields: {
    description: {type: 'Edm.String'},
    group: {type: 'Edm.String'},
    hidden: {type: 'Edm.Boolean'},
    inheritedFrom: {type: 'graph.itemReference'},
    name: {type: 'Edm.String'},
    order: {type: 'graph.contentTypeOrder'},
    parentId: {type: 'Edm.String'},
    readOnly: {type: 'Edm.Boolean'},
    sealed: {type: 'Edm.Boolean'},
    columnLinks: {type: 'graph.columnLink', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ContentType>;
//#endregion