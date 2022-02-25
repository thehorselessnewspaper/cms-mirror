//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceComplianceActionItem } from './devicecomplianceactionitem.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceComplianceActionItemEntityConfig = {
  name: 'deviceComplianceActionItem',
  base: 'microsoft.graph.entity',
  fields: {
    gracePeriodHours: {type: 'Edm.Int32', nullable: false},
    actionType: {type: 'graph.deviceComplianceActionType', nullable: false},
    notificationTemplateId: {type: 'Edm.String'},
    notificationMessageCCList: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<DeviceComplianceActionItem>;
//#endregion