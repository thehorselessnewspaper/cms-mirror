//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NotebookLinks } from './notebooklinks.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const NotebookLinksComplexConfig = {
  name: 'notebookLinks',
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as StructuredTypeConfig<NotebookLinks>;
//#endregion