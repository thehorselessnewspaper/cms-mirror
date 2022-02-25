//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Onenote } from './onenote.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenoteEntityConfig = {
  name: 'onenote',
  base: 'microsoft.graph.entity',
  fields: {
    notebooks: {type: 'graph.notebook', collection: true, navigation: true},
    sections: {type: 'graph.onenoteSection', collection: true, navigation: true},
    sectionGroups: {type: 'graph.sectionGroup', collection: true, navigation: true},
    pages: {type: 'graph.onenotePage', collection: true, navigation: true},
    resources: {type: 'graph.onenoteResource', collection: true, navigation: true},
    operations: {type: 'graph.onenoteOperation', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Onenote>;
//#endregion