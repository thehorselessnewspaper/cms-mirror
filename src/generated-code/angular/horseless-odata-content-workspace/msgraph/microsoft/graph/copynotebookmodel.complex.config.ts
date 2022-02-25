//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CopyNotebookModel } from './copynotebookmodel.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CopyNotebookModelComplexConfig = {
  name: 'CopyNotebookModel',
  fields: {
    isDefault: {type: 'Edm.Boolean'},
    userRole: {type: 'graph.onenoteUserRole'},
    isShared: {type: 'Edm.Boolean'},
    sectionsUrl: {type: 'Edm.String'},
    sectionGroupsUrl: {type: 'Edm.String'},
    links: {type: 'graph.notebookLinks'},
    name: {type: 'Edm.String'},
    createdBy: {type: 'Edm.String'},
    createdByIdentity: {type: 'graph.identitySet'},
    lastModifiedBy: {type: 'Edm.String'},
    lastModifiedByIdentity: {type: 'graph.identitySet'},
    lastModifiedTime: {type: 'Edm.DateTimeOffset'},
    id: {type: 'Edm.String'},
    self: {type: 'Edm.String'},
    createdTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<CopyNotebookModel>;
//#endregion