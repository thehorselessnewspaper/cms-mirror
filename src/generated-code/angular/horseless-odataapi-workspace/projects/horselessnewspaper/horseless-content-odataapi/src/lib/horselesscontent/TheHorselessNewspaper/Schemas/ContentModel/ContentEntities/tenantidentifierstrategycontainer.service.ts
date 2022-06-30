import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
  ODataEntity,
  ODataEntities,
  ODataProperty,
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyName } from './tenantidentifierstrategyname.enum';
import { TenantIdentifierStrategyContainer } from './tenantidentifierstrategycontainer.entity';
import { TenantIdentifierStrategy } from './tenantidentifierstrategy.entity';
//#endregion

@Injectable()
export class TenantIdentifierStrategyContainerService extends ODataEntitySetService<TenantIdentifierStrategyContainer> {
  constructor(client: ODataClient) {
    super(client, 'TenantIdentifierStrategyContainer', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategyContainer');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public strategy(key: EntityKey<TenantIdentifierStrategyContainer>): ODataNavigationPropertyResource<TenantIdentifierStrategy> { 
    return this.entity(key).navigationProperty<TenantIdentifierStrategy>('Strategy'); 
  }
  public fetchStrategy(key: EntityKey<TenantIdentifierStrategyContainer>, options?: ODataQueryArgumentsOptions<TenantIdentifierStrategy>) {
    return this.fetchNavigationProperty<TenantIdentifierStrategy>(
      this.strategy(key), 
      'entity', options) as Observable<ODataEntity<TenantIdentifierStrategy>>;
  }
  public setTenantIdentifierStrategyAsStrategy(key: EntityKey<TenantIdentifierStrategyContainer>, target: ODataEntityResource<ODataEntity<TenantIdentifierStrategy>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.strategy(key).reference()
      .set(target, {etag});
  }
  public unsetTenantIdentifierStrategyAsStrategy(key: EntityKey<TenantIdentifierStrategyContainer>, {target, etag}: {target?: ODataEntityResource<ODataEntity<TenantIdentifierStrategy>>, etag?: string} = {}): Observable<any> {
    return this.strategy(key).reference()
      .unset({etag});
  }
  //#endregion
}
