//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SectionGroup } from './sectiongroup.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SectionGroupEntityConfig = {
  name: 'sectionGroup',
  base: 'microsoft.graph.onenoteEntityHierarchyModel',
  fields: {
    sectionsUrl: {type: 'Edm.String'},
    sectionGroupsUrl: {type: 'Edm.String'},
    parentNotebook: {type: 'graph.notebook', navigation: true},
    parentSectionGroup: {type: 'graph.sectionGroup', navigation: true},
    sections: {type: 'graph.onenoteSection', collection: true, navigation: true},
    sectionGroups: {type: 'graph.sectionGroup', collection: true, navigation: true}
  }
} as StructuredTypeConfig<SectionGroup>;
//#endregion