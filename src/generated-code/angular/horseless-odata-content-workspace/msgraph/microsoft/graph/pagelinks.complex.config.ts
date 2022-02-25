//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PageLinks } from './pagelinks.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PageLinksComplexConfig = {
  name: 'pageLinks',
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as StructuredTypeConfig<PageLinks>;
//#endregion