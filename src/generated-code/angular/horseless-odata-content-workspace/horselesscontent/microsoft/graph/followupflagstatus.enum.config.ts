//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FollowupFlagStatus } from './followupflagstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const FollowupFlagStatusConfig = {
  name: 'followupFlagStatus',
  members: FollowupFlagStatus,
  fields: {
    notFlagged: {value: 0},
    complete: {value: 1},
    flagged: {value: 2}
  }
} as EnumTypeConfig<FollowupFlagStatus>;
//#endregion