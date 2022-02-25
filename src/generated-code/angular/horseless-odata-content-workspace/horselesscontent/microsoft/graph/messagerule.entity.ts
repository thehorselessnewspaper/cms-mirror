//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { MessageRulePredicates } from './messagerulepredicates.complex';
import { MessageRuleActions } from './messageruleactions.complex';
//#endregion

export interface MessageRule extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  sequence?: number;
  conditions?: MessageRulePredicates;
  actions?: MessageRuleActions;
  exceptions?: MessageRulePredicates;
  isEnabled?: boolean;
  hasError?: boolean;
  isReadOnly?: boolean;
  //#endregion
}