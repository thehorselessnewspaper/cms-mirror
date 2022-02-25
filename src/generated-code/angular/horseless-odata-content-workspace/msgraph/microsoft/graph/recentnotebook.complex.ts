//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteSourceService } from './onenotesourceservice.enum';
import { RecentNotebookLinks } from './recentnotebooklinks.complex';
//#endregion

export interface RecentNotebook {
  //#region ODataApiGen Properties
  displayName?: string;
  lastAccessedTime?: Date;
  links?: RecentNotebookLinks;
  sourceService?: OnenoteSourceService;
  //#endregion
}