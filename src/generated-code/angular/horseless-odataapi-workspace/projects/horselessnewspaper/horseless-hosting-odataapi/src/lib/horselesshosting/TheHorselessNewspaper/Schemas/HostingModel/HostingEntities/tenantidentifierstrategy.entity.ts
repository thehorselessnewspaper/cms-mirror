//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyContainer } from './tenantidentifierstrategycontainer.entity';
import { Tenant } from './tenant.entity';
//#endregion

export interface TenantIdentifierStrategy {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  TargetTenantId?: string;
  TargetTenant?: Tenant;
  StrategyContainers?: TenantIdentifierStrategyContainer[];
  //#endregion
}