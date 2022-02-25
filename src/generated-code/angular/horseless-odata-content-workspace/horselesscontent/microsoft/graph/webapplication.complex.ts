//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ImplicitGrantSettings } from './implicitgrantsettings.complex';
//#endregion

export interface WebApplication {
  //#region ODataApiGen Properties
  homePageUrl?: string;
  redirectUris: string[];
  logoutUrl?: string;
  implicitGrantSettings?: ImplicitGrantSettings;
  //#endregion
}