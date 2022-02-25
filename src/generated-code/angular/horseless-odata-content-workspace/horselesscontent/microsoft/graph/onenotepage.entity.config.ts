//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenotePage } from './onenotepage.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenotePageEntityConfig = {
  name: 'onenotePage',
  base: 'microsoft.graph.onenoteEntitySchemaObjectModel',
  fields: {
    title: {type: 'Edm.String'},
    createdByAppId: {type: 'Edm.String'},
    links: {type: 'graph.pageLinks'},
    contentUrl: {type: 'Edm.String'},
    content: {type: 'Edm.Stream'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    level: {type: 'Edm.Int32'},
    order: {type: 'Edm.Int32'},
    userTags: {type: 'Edm.String', collection: true},
    parentSection: {type: 'graph.onenoteSection', navigation: true},
    parentNotebook: {type: 'graph.notebook', navigation: true}
  }
} as StructuredTypeConfig<OnenotePage>;
//#endregion