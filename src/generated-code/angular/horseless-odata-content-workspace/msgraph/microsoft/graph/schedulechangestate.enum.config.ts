//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleChangeState } from './schedulechangestate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ScheduleChangeStateConfig = {
  name: 'scheduleChangeState',
  members: ScheduleChangeState,
  fields: {
    pending: {value: 0},
    approved: {value: 1},
    declined: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<ScheduleChangeState>;
//#endregion