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
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Tenant } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenant.entity';
import { TenantIdentifierStrategyContainer } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenantidentifierstrategycontainer.entity';
import { TenantIdentifierStrategy } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenantidentifierstrategy.entity';
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
  public tenant(key: EntityKey<TenantIdentifierStrategy>): ODataNavigationPropertyResource<Tenant> { 
    return this.entity(key).navigationProperty<Tenant>('Tenant'); 
  }
  public fetchTenant(key: EntityKey<TenantIdentifierStrategy>, options?: ODataQueryArgumentsOptions<Tenant>) {
    return this.fetchNavigationProperty<Tenant>(
      this.tenant(key), 
      'entity', options) as Observable<ODataEntity<Tenant>>;
  }
  public setTenantAsTenant(key: EntityKey<TenantIdentifierStrategy>, target: ODataEntityResource<ODataEntity<Tenant>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.tenant(key).reference()
      .set(target, {etag});
  }
  public unsetTenantAsTenant(key: EntityKey<TenantIdentifierStrategy>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Tenant>>, etag?: string} = {}): Observable<any> {
    return this.tenant(key).reference()
      .unset({etag});
  }
  public tenantIdentifierStrategyContainers(key: EntityKey<TenantIdentifierStrategy>): ODataNavigationPropertyResource<TenantIdentifierStrategyContainer> { 
    return this.entity(key).navigationProperty<TenantIdentifierStrategyContainer>('TenantIdentifierStrategyContainers'); 
  }
  public fetchTenantIdentifierStrategyContainers(key: EntityKey<TenantIdentifierStrategy>, options?: ODataQueryArgumentsOptions<TenantIdentifierStrategyContainer>) {
    return this.fetchNavigationProperty<TenantIdentifierStrategyContainer>(
      this.tenantIdentifierStrategyContainers(key), 
      'entities', options) as Observable<ODataEntities<TenantIdentifierStrategyContainer>>;
  }
  public addTenantIdentifierStrategyContainerToTenantIdentifierStrategyContainers(key: EntityKey<TenantIdentifierStrategy>, target: ODataEntityResource<ODataEntities<TenantIdentifierStrategyContainer>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.tenantIdentifierStrategyContainers(key).reference()
      .add(target);
  }
  public removeTenantIdentifierStrategyContainerFromTenantIdentifierStrategyContainers(key: EntityKey<TenantIdentifierStrategy>, {target, etag}: {target?: ODataEntityResource<ODataEntities<TenantIdentifierStrategyContainer>>, etag?: string} = {}): Observable<any> {
    return this.tenantIdentifierStrategyContainers(key).reference()
      .remove(target);
  }
  //#endregion
}
