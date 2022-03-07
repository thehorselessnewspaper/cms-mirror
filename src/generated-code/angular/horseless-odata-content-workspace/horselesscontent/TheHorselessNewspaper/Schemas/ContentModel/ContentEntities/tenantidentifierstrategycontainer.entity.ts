//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyName } from './tenantidentifierstrategyname.enum';
import { TenantIdentifierStrategy } from './tenantidentifierstrategy.entity';
//#endregion

export interface TenantIdentifierStrategyContainer {
  //#region ODataApiGen Properties
  Id: string;
  TenantIdentifierStrategyId?: string;
  TenantIdentifierStrategyName: TenantIdentifierStrategyName;
  TenantIdentifierStrategy?: TenantIdentifierStrategy;
  //#endregion
}