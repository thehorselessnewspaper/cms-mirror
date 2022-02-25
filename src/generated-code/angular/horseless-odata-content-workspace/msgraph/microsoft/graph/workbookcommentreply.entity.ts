//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface WorkbookCommentReply extends Entity {
  //#region ODataApiGen Properties
  content?: string;
  contentType: string;
  //#endregion
}