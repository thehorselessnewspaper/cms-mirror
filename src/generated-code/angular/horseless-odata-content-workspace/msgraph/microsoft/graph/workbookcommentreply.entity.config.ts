//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookCommentReply } from './workbookcommentreply.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookCommentReplyEntityConfig = {
  name: 'workbookCommentReply',
  base: 'microsoft.graph.entity',
  fields: {
    content: {type: 'Edm.String'},
    contentType: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<WorkbookCommentReply>;
//#endregion