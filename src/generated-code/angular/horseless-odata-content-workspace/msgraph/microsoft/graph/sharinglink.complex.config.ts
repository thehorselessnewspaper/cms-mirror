//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharingLink } from './sharinglink.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SharingLinkComplexConfig = {
  name: 'sharingLink',
  fields: {
    application: {type: 'graph.identity'},
    preventsDownload: {type: 'Edm.Boolean'},
    scope: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    webHtml: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SharingLink>;
//#endregion