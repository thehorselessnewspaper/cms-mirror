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
import { Tenant } from './tenant.entity';
import { TenantIdentifierStrategyContainer } from './tenantidentifierstrategycontainer.entity';
import { TenantIdentifierStrategy } from './tenantidentifierstrategy.entity';
//#endregion

@Injectable()
export class TenantIdentifierStrategyService extends ODataEntitySetService<TenantIdentifierStrategy> {
  constructor(client: ODataClient) {
    super(client, 'TenantIdentifierStrategy', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategy');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public strategyContainers(key: EntityKey<TenantIdentifierStrategy>): ODataNavigationPropertyResource<TenantIdentifierStrategyContainer> { 
    return this.entity(key).navigationProperty<TenantIdentifierStrategyContainer>('StrategyContainers'); 
  }
  public fetchStrategyContainers(key: EntityKey<TenantIdentifierStrategy>, options?: ODataQueryArgumentsOptions<TenantIdentifierStrategyContainer>) {
    return this.fetchNavigationProperty<TenantIdentifierStrategyContainer>(
      this.strategyContainers(key), 
      'entities', options) as Observable<ODataEntities<TenantIdentifierStrategyContainer>>;
  }
  public addTenantIdentifierStrategyContainerToStrategyContainers(key: EntityKey<TenantIdentifierStrategy>, target: ODataEntityResource<ODataEntities<TenantIdentifierStrategyContainer>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.strategyContainers(key).reference()
      .add(target);
  }
  public removeTenantIdentifierStrategyContainerFromStrategyContainers(key: EntityKey<TenantIdentifierStrategy>, {target, etag}: {target?: ODataEntityResource<ODataEntities<TenantIdentifierStrategyContainer>>, etag?: string} = {}): Observable<any> {
    return this.strategyContainers(key).reference()
      .remove(target);
  }
  public targetTenant(key: EntityKey<TenantIdentifierStrategy>): ODataNavigationPropertyResource<Tenant> { 
    return this.entity(key).navigationProperty<Tenant>('TargetTenant'); 
  }
  public fetchTargetTenant(key: EntityKey<TenantIdentifierStrategy>, options?: ODataQueryArgumentsOptions<Tenant>) {
    return this.fetchNavigationProperty<Tenant>(
      this.targetTenant(key), 
      'entity', options) as Observable<ODataEntity<Tenant>>;
  }
  public setTenantAsTargetTenant(key: EntityKey<TenantIdentifierStrategy>, target: ODataEntityResource<ODataEntity<Tenant>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.targetTenant(key).reference()
      .set(target, {etag});
  }
  public unsetTenantAsTargetTenant(key: EntityKey<TenantIdentifierStrategy>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Tenant>>, etag?: string} = {}): Observable<any> {
    return this.targetTenant(key).reference()
      .unset({etag});
  }
  //#endregion
}
