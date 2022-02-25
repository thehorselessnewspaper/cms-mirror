//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MessageRule } from './messagerule.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MessageRuleEntityConfig = {
  name: 'messageRule',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    sequence: {type: 'Edm.Int32'},
    conditions: {type: 'graph.messageRulePredicates'},
    actions: {type: 'graph.messageRuleActions'},
    exceptions: {type: 'graph.messageRulePredicates'},
    isEnabled: {type: 'Edm.Boolean'},
    hasError: {type: 'Edm.Boolean'},
    isReadOnly: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<MessageRule>;
//#endregion