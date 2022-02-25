//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CommsNotifications } from './commsnotifications.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CommsNotificationsComplexConfig = {
  name: 'commsNotifications',
  fields: {
    value: {type: 'graph.commsNotification', collection: true}
  }
} as StructuredTypeConfig<CommsNotifications>;
//#endregion