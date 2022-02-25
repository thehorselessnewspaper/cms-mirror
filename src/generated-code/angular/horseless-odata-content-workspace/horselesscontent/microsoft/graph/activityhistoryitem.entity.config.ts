//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ActivityHistoryItem } from './activityhistoryitem.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ActivityHistoryItemEntityConfig = {
  name: 'activityHistoryItem',
  base: 'microsoft.graph.entity',
  fields: {
    status: {type: 'graph.status'},
    activeDurationSeconds: {type: 'Edm.Int32'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastActiveDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    startedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userTimezone: {type: 'Edm.String'},
    activity: {type: 'graph.userActivity', navigation: true}
  }
} as StructuredTypeConfig<ActivityHistoryItem>;
//#endregion