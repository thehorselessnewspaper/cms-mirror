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
import { TenantIdentifierStrategyName } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenantidentifierstrategyname.enum';
import { TenantIdentifierStrategyContainer } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenantidentifierstrategycontainer.entity';
import { TenantIdentifierStrategy } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenantidentifierstrategy.entity';
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
  public tenantIdentifierStrategy(key: EntityKey<TenantIdentifierStrategyContainer>): ODataNavigationPropertyResource<TenantIdentifierStrategy> { 
    return this.entity(key).navigationProperty<TenantIdentifierStrategy>('TenantIdentifierStrategy'); 
  }
  public fetchTenantIdentifierStrategy(key: EntityKey<TenantIdentifierStrategyContainer>, options?: ODataQueryArgumentsOptions<TenantIdentifierStrategy>) {
    return this.fetchNavigationProperty<TenantIdentifierStrategy>(
      this.tenantIdentifierStrategy(key), 
      'entity', options) as Observable<ODataEntity<TenantIdentifierStrategy>>;
  }
  public setTenantIdentifierStrategyAsTenantIdentifierStrategy(key: EntityKey<TenantIdentifierStrategyContainer>, target: ODataEntityResource<ODataEntity<TenantIdentifierStrategy>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.tenantIdentifierStrategy(key).reference()
      .set(target, {etag});
  }
  public unsetTenantIdentifierStrategyAsTenantIdentifierStrategy(key: EntityKey<TenantIdentifierStrategyContainer>, {target, etag}: {target?: ODataEntityResource<ODataEntity<TenantIdentifierStrategy>>, etag?: string} = {}): Observable<any> {
    return this.tenantIdentifierStrategy(key).reference()
      .unset({etag});
  }
  //#endregion
}
