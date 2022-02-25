//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenotePagePreview } from './onenotepagepreview.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenotePagePreviewComplexConfig = {
  name: 'onenotePagePreview',
  fields: {
    previewText: {type: 'Edm.String'},
    links: {type: 'graph.onenotePagePreviewLinks'}
  }
} as StructuredTypeConfig<OnenotePagePreview>;
//#endregion