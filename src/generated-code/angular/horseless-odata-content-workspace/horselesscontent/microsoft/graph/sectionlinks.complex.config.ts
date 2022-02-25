//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SectionLinks } from './sectionlinks.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SectionLinksComplexConfig = {
  name: 'sectionLinks',
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as StructuredTypeConfig<SectionLinks>;
//#endregion