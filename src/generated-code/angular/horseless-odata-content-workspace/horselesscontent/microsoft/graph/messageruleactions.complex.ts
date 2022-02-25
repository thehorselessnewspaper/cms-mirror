//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Importance } from './importance.enum';
import { Recipient } from './recipient.complex';
//#endregion

export interface MessageRuleActions {
  //#region ODataApiGen Properties
  moveToFolder?: string;
  copyToFolder?: string;
  delete?: boolean;
  permanentDelete?: boolean;
  markAsRead?: boolean;
  markImportance?: Importance;
  forwardTo?: Recipient[];
  forwardAsAttachmentTo?: Recipient[];
  redirectTo?: Recipient[];
  assignCategories?: string[];
  stopProcessingRules?: boolean;
  //#endregion
}