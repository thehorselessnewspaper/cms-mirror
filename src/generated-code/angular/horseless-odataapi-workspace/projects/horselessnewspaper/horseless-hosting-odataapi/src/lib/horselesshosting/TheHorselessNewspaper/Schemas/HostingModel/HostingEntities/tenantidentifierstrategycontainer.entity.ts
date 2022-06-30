//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyName } from './tenantidentifierstrategyname.enum';
import { TenantIdentifierStrategy } from './tenantidentifierstrategy.entity';
//#endregion

export interface TenantIdentifierStrategyContainer {
  //#region ODataApiGen Properties
  Id: string;
  TenantIdentifierStrategyName: TenantIdentifierStrategyName;
  Timestamp?: ArrayBuffer;
  StrategyId?: string;
  Strategy?: TenantIdentifierStrategy;
  //#endregion
}