//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecentNotebook } from './recentnotebook.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RecentNotebookComplexConfig = {
  name: 'recentNotebook',
  fields: {
    displayName: {type: 'Edm.String'},
    lastAccessedTime: {type: 'Edm.DateTimeOffset'},
    links: {type: 'graph.recentNotebookLinks'},
    sourceService: {type: 'graph.onenoteSourceService'}
  }
} as StructuredTypeConfig<RecentNotebook>;
//#endregion