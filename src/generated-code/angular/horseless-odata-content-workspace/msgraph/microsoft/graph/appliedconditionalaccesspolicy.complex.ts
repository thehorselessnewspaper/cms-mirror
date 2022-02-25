//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppliedConditionalAccessPolicyResult } from './appliedconditionalaccesspolicyresult.enum';
//#endregion

export interface AppliedConditionalAccessPolicy {
  //#region ODataApiGen Properties
  id?: string;
  displayName?: string;
  enforcedGrantControls?: string[];
  enforcedSessionControls?: string[];
  result?: AppliedConditionalAccessPolicyResult;
  //#endregion
}