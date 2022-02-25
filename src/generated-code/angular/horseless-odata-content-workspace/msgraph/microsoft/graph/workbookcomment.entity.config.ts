//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookComment } from './workbookcomment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookCommentEntityConfig = {
  name: 'workbookComment',
  base: 'microsoft.graph.entity',
  fields: {
    content: {type: 'Edm.String'},
    contentType: {type: 'Edm.String', nullable: false},
    replies: {type: 'graph.workbookCommentReply', collection: true, navigation: true}
  }
} as StructuredTypeConfig<WorkbookComment>;
//#endregion