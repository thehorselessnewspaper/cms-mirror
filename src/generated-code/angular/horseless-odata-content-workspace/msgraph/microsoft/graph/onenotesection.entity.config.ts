//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteSection } from './onenotesection.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenoteSectionEntityConfig = {
  name: 'onenoteSection',
  base: 'microsoft.graph.onenoteEntityHierarchyModel',
  fields: {
    isDefault: {type: 'Edm.Boolean'},
    links: {type: 'graph.sectionLinks'},
    pagesUrl: {type: 'Edm.String'},
    parentNotebook: {type: 'graph.notebook', navigation: true},
    parentSectionGroup: {type: 'graph.sectionGroup', navigation: true},
    pages: {type: 'graph.onenotePage', collection: true, navigation: true}
  }
} as StructuredTypeConfig<OnenoteSection>;
//#endregion