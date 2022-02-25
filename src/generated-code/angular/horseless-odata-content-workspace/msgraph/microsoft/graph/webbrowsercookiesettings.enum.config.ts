//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WebBrowserCookieSettings } from './webbrowsercookiesettings.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WebBrowserCookieSettingsConfig = {
  name: 'webBrowserCookieSettings',
  members: WebBrowserCookieSettings,
  fields: {
    browserDefault: {value: 0},
    blockAlways: {value: 1},
    allowCurrentWebSite: {value: 2},
    allowFromWebsitesVisited: {value: 3},
    allowAlways: {value: 4}
  }
} as EnumTypeConfig<WebBrowserCookieSettings>;
//#endregion