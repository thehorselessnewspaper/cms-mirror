//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { Tenant } from './tenant.entity';
import { TenantIdentifierStrategyContainer } from './tenantidentifierstrategycontainer.entity';
//#endregion

export interface TenantIdentifierStrategy {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName: string;
  ObjectId: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  Timestamp: ArrayBuffer;
  TargetTenant?: Tenant;
  StrategyContainers?: TenantIdentifierStrategyContainer[];
  //#endregion
}