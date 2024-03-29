﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Tenant } from './tenant.entity';
import { TenantIdentifierStrategyContainer } from './tenantidentifierstrategycontainer.entity';
//#endregion

export interface TenantIdentifierStrategy {
  //#region ODataApiGen Properties
  Id: string;
  TenantId?: string;
  DisplayName: string;
  ObjectId: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  Tenant?: Tenant;
  TenantIdentifierStrategyContainers?: TenantIdentifierStrategyContainer[];
  //#endregion
}