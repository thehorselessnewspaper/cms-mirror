//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Notebook } from './notebook.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const NotebookEntityConfig = {
  name: 'notebook',
  base: 'microsoft.graph.onenoteEntityHierarchyModel',
  fields: {
    isDefault: {type: 'Edm.Boolean'},
    userRole: {type: 'graph.onenoteUserRole'},
    isShared: {type: 'Edm.Boolean'},
    sectionsUrl: {type: 'Edm.String'},
    sectionGroupsUrl: {type: 'Edm.String'},
    links: {type: 'graph.notebookLinks'},
    sections: {type: 'graph.onenoteSection', collection: true, navigation: true},
    sectionGroups: {type: 'graph.sectionGroup', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Notebook>;
//#endregion