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
  TenantIdentifierStrategyName: TenantIdentifierStrategyName;
  DisplayName: string;
  ObjectId: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  Timestamp: ArrayBuffer;
  TenantIdentifier: string;
  Strategy?: TenantIdentifierStrategy;
  //#endregion
}