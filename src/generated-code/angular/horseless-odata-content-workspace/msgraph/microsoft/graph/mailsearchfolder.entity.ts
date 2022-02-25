//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MailFolder } from './mailfolder.entity';
//#endregion

export interface MailSearchFolder extends MailFolder {
  //#region ODataApiGen Properties
  isSupported?: boolean;
  includeNestedFolders?: boolean;
  sourceFolderIds?: string[];
  filterQuery?: string;
  //#endregion
}