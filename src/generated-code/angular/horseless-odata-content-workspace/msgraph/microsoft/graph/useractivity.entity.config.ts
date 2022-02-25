//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserActivity } from './useractivity.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UserActivityEntityConfig = {
  name: 'userActivity',
  base: 'microsoft.graph.entity',
  fields: {
    visualElements: {type: 'graph.visualInfo', nullable: false},
    activitySourceHost: {type: 'Edm.String', nullable: false},
    activationUrl: {type: 'Edm.String', nullable: false},
    appActivityId: {type: 'Edm.String', nullable: false},
    appDisplayName: {type: 'Edm.String'},
    contentUrl: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    fallbackUrl: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    userTimezone: {type: 'Edm.String'},
    contentInfo: {type: 'graph.Json'},
    status: {type: 'graph.status'},
    historyItems: {type: 'graph.activityHistoryItem', collection: true, navigation: true}
  }
} as StructuredTypeConfig<UserActivity>;
//#endregion