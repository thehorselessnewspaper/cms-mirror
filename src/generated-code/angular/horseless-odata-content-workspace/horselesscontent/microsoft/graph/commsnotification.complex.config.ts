//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CommsNotification } from './commsnotification.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CommsNotificationComplexConfig = {
  name: 'commsNotification',
  open: true,
  fields: {
    changeType: {type: 'graph.changeType', nullable: false},
    resourceUrl: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<CommsNotification>;
//#endregion