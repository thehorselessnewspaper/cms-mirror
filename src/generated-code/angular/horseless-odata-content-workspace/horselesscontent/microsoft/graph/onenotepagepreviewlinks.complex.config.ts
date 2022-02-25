//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenotePagePreviewLinks } from './onenotepagepreviewlinks.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenotePagePreviewLinksComplexConfig = {
  name: 'onenotePagePreviewLinks',
  fields: {
    previewImageUrl: {type: 'graph.externalLink'}
  }
} as StructuredTypeConfig<OnenotePagePreviewLinks>;
//#endregion