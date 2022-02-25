//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DeviceComplianceActionItem } from './devicecomplianceactionitem.entity';
//#endregion

export interface DeviceComplianceScheduledActionForRule extends Entity {
  //#region ODataApiGen Properties
  ruleName?: string;
  scheduledActionConfigurations?: DeviceComplianceActionItem[];
  //#endregion
}