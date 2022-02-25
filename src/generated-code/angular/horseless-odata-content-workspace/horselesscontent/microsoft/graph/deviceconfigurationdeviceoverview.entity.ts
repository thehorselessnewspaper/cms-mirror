//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface DeviceConfigurationDeviceOverview extends Entity {
  //#region ODataApiGen Properties
  pendingCount: number;
  notApplicableCount: number;
  successCount: number;
  errorCount: number;
  failedCount: number;
  lastUpdateDateTime: Date;
  configurationVersion: number;
  //#endregion
}