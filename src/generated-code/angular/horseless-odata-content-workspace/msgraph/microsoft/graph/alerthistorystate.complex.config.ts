//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AlertHistoryState } from './alerthistorystate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AlertHistoryStateComplexConfig = {
  name: 'alertHistoryState',
  fields: {
    appId: {type: 'Edm.String'},
    assignedTo: {type: 'Edm.String'},
    comments: {type: 'Edm.String', collection: true},
    feedback: {type: 'graph.alertFeedback'},
    status: {type: 'graph.alertStatus'},
    updatedDateTime: {type: 'Edm.DateTimeOffset'},
    user: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AlertHistoryState>;
//#endregion