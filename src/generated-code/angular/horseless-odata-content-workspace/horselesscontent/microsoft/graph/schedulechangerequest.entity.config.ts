//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ScheduleChangeRequestEntityConfig = {
  name: 'scheduleChangeRequest',
  base: 'microsoft.graph.changeTrackedEntity',
  fields: {
    assignedTo: {type: 'graph.scheduleChangeRequestActor'},
    state: {type: 'graph.scheduleChangeState'},
    senderMessage: {type: 'Edm.String'},
    senderDateTime: {type: 'Edm.DateTimeOffset'},
    managerActionMessage: {type: 'Edm.String'},
    managerActionDateTime: {type: 'Edm.DateTimeOffset'},
    senderUserId: {type: 'Edm.String'},
    managerUserId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ScheduleChangeRequest>;
//#endregion