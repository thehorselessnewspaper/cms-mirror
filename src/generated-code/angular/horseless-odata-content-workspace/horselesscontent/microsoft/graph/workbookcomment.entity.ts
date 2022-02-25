//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookCommentReply } from './workbookcommentreply.entity';
//#endregion

export interface WorkbookComment extends Entity {
  //#region ODataApiGen Properties
  content?: string;
  contentType: string;
  replies?: WorkbookCommentReply[];
  //#endregion
}