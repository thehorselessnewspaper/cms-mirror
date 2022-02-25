//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MessageRuleActions } from './messageruleactions.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MessageRuleActionsComplexConfig = {
  name: 'messageRuleActions',
  fields: {
    moveToFolder: {type: 'Edm.String'},
    copyToFolder: {type: 'Edm.String'},
    delete: {type: 'Edm.Boolean'},
    permanentDelete: {type: 'Edm.Boolean'},
    markAsRead: {type: 'Edm.Boolean'},
    markImportance: {type: 'graph.importance'},
    forwardTo: {type: 'graph.recipient', collection: true},
    forwardAsAttachmentTo: {type: 'graph.recipient', collection: true},
    redirectTo: {type: 'graph.recipient', collection: true},
    assignCategories: {type: 'Edm.String', collection: true},
    stopProcessingRules: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<MessageRuleActions>;
//#endregion