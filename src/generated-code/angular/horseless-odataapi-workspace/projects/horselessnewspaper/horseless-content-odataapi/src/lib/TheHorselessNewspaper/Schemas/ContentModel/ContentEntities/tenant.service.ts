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
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { ContentCollection } from './contentcollection.entity';
import { JSONAsset } from './jsonasset.entity';
import { Principal } from './principal.entity';
import { Tenant } from './tenant.entity';
import { TenantIdentifierStrategy } from './tenantidentifierstrategy.entity';
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
  public accessControlEntries(key: EntityKey<Tenant>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<Tenant>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<Tenant>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<Tenant>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public accounts(key: EntityKey<Tenant>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Accounts'); 
  }
  public fetchAccounts(key: EntityKey<Tenant>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.accounts(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToAccounts(key: EntityKey<Tenant>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accounts(key).reference()
      .add(target);
  }
  public removePrincipalFromAccounts(key: EntityKey<Tenant>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.accounts(key).reference()
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
  public metaData(key: EntityKey<Tenant>): ODataNavigationPropertyResource<JSONAsset> { 
    return this.entity(key).navigationProperty<JSONAsset>('MetaData'); 
  }
  public fetchMetaData(key: EntityKey<Tenant>, options?: ODataQueryArgumentsOptions<JSONAsset>) {
    return this.fetchNavigationProperty<JSONAsset>(
      this.metaData(key), 
      'entities', options) as Observable<ODataEntities<JSONAsset>>;
  }
  public addJSONAssetToMetaData(key: EntityKey<Tenant>, target: ODataEntityResource<ODataEntities<JSONAsset>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.metaData(key).reference()
      .add(target);
  }
  public removeJSONAssetFromMetaData(key: EntityKey<Tenant>, {target, etag}: {target?: ODataEntityResource<ODataEntities<JSONAsset>>, etag?: string} = {}): Observable<any> {
    return this.metaData(key).reference()
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
