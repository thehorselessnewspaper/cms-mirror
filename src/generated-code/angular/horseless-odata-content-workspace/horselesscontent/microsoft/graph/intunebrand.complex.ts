//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MimeContent } from './mimecontent.complex';
import { RgbColor } from './rgbcolor.complex';
//#endregion

export interface IntuneBrand {
  //#region ODataApiGen Properties
  displayName?: string;
  themeColor?: RgbColor;
  showLogo: boolean;
  lightBackgroundLogo?: MimeContent;
  darkBackgroundLogo?: MimeContent;
  showNameNextToLogo: boolean;
  showDisplayNameNextToLogo: boolean;
  contactITName?: string;
  contactITPhoneNumber?: string;
  contactITEmailAddress?: string;
  contactITNotes?: string;
  onlineSupportSiteUrl?: string;
  onlineSupportSiteName?: string;
  privacyUrl?: string;
  //#endregion
}