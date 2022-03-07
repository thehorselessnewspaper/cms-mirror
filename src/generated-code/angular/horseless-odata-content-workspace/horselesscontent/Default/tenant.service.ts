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
import { AccessControlEntry } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/accesscontrolentry.entity';
import { ContentCollection } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/contentcollection.entity';
import { Principal } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/principal.entity';
import { Tenant } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenant.entity';
import { TenantIdentifierStrategy } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenantidentifierstrategy.entity';
//#endregion

@Injectable()
export class TenantService extends ODataEntitySetService<Tenant> {
  constructor(client: ODataClient) {
    super(client, 'Tenant', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlList(key: EntityKey<Tenant>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlList'); 
  }
  public fetchAccessControlList(key: EntityKey<Tenant>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlList(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlList(key: EntityKey<Tenant>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlList(key: EntityKey<Tenant>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .remove(target);
  }
  public contentCollections(key: EntityKey<Tenant>): ODataNavigationPropertyResource<ContentCollection> { 
    return this.entity(key).navigationProperty<ContentCollection>('ContentCollections'); 
  }
  public fetchContentCollections(key: EntityKey<Tenant>, options?: ODataQueryArgumentsOptions<ContentCollection>) {
    return this.fetchNavigationProperty<ContentCollection>(
      this.contentCollections(key), 
      'entities', options) as Observable<ODataEntities<ContentCollection>>;
  }
  public addContentCollectionToContentCollections(key: EntityKey<Tenant>, target: ODataEntityResource<ODataEntities<ContentCollection>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.contentCollections(key).reference()
      .add(target);
  }
  public removeContentCollectionFromContentCollections(key: EntityKey<Tenant>, {target, etag}: {target?: ODataEntityResource<ODataEntities<ContentCollection>>, etag?: string} = {}): Observable<any> {
    return this.contentCollections(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<Tenant>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<Tenant>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<Tenant>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<Tenant>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public principals(key: EntityKey<Tenant>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Principals'); 
  }
  public fetchPrincipals(key: EntityKey<Tenant>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.principals(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToPrincipals(key: EntityKey<Tenant>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.principals(key).reference()
      .add(target);
  }
  public removePrincipalFromPrincipals(key: EntityKey<Tenant>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.principals(key).reference()
      .remove(target);
  }
  public tenantIdentifierStrategy(key: EntityKey<Tenant>): ODataNavigationPropertyResource<TenantIdentifierStrategy> { 
    return this.entity(key).navigationProperty<TenantIdentifierStrategy>('TenantIdentifierStrategy'); 
  }
  public fetchTenantIdentifierStrategy(key: EntityKey<Tenant>, options?: ODataQueryArgumentsOptions<TenantIdentifierStrategy>) {
    return this.fetchNavigationProperty<TenantIdentifierStrategy>(
      this.tenantIdentifierStrategy(key), 
      'entity', options) as Observable<ODataEntity<TenantIdentifierStrategy>>;
  }
  public setTenantIdentifierStrategyAsTenantIdentifierStrategy(key: EntityKey<Tenant>, target: ODataEntityResource<ODataEntity<TenantIdentifierStrategy>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.tenantIdentifierStrategy(key).reference()
      .set(target, {etag});
  }
  public unsetTenantIdentifierStrategyAsTenantIdentifierStrategy(key: EntityKey<Tenant>, {target, etag}: {target?: ODataEntityResource<ODataEntity<TenantIdentifierStrategy>>, etag?: string} = {}): Observable<any> {
    return this.tenantIdentifierStrategy(key).reference()
      .unset({etag});
  }
  //#endregion
}
