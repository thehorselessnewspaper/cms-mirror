//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FollowupFlag } from './followupflag.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FollowupFlagComplexConfig = {
  name: 'followupFlag',
  fields: {
    completedDateTime: {type: 'graph.dateTimeTimeZone'},
    dueDateTime: {type: 'graph.dateTimeTimeZone'},
    startDateTime: {type: 'graph.dateTimeTimeZone'},
    flagStatus: {type: 'graph.followupFlagStatus'}
  }
} as StructuredTypeConfig<FollowupFlag>;
//#endregion