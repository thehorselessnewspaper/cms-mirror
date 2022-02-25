//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleChangeRequestActor } from './schedulechangerequestactor.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ScheduleChangeRequestActorConfig = {
  name: 'scheduleChangeRequestActor',
  members: ScheduleChangeRequestActor,
  fields: {
    sender: {value: 0},
    recipient: {value: 1},
    manager: {value: 2},
    system: {value: 3},
    unknownFutureValue: {value: 4}
  }
} as EnumTypeConfig<ScheduleChangeRequestActor>;
//#endregion