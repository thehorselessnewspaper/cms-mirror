//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AutomaticRepliesStatus } from './automaticrepliesstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AutomaticRepliesStatusConfig = {
  name: 'automaticRepliesStatus',
  members: AutomaticRepliesStatus,
  fields: {
    disabled: {value: 0},
    alwaysEnabled: {value: 1},
    scheduled: {value: 2}
  }
} as EnumTypeConfig<AutomaticRepliesStatus>;
//#endregion