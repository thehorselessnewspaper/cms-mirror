//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DeviceComplianceActionType } from './devicecomplianceactiontype.enum';
//#endregion

export interface DeviceComplianceActionItem extends Entity {
  //#region ODataApiGen Properties
  gracePeriodHours: number;
  actionType: DeviceComplianceActionType;
  notificationTemplateId?: string;
  notificationMessageCCList?: string[];
  //#endregion
}