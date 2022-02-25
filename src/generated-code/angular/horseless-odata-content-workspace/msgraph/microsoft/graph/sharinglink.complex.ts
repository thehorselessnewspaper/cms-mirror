//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Identity } from './identity.complex';
//#endregion

export interface SharingLink {
  //#region ODataApiGen Properties
  application?: Identity;
  preventsDownload?: boolean;
  scope?: string;
  type?: string;
  webHtml?: string;
  webUrl?: string;
  //#endregion
}