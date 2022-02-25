//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecentNotebookLinks } from './recentnotebooklinks.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RecentNotebookLinksComplexConfig = {
  name: 'recentNotebookLinks',
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as StructuredTypeConfig<RecentNotebookLinks>;
//#endregion