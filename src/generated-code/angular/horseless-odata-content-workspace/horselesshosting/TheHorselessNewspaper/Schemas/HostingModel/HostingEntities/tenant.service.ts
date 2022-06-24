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
import { Principal } from './principal.entity';
import { TenantIdentifierStrategy } from './tenantidentifierstrategy.entity';
import { Tenant } from './tenant.entity';
import { TenantInfo } from './tenantinfo.entity';
//#endregion

@Injectable()
export class TenantService extends ODataEntitySetService<Tenant> {
  constructor(client: ODataClient) {
    super(client, 'Tenant', 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant');
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
  public tenantInfos(key: EntityKey<Tenant>): ODataNavigationPropertyResource<TenantInfo> { 
    return this.entity(key).navigationProperty<TenantInfo>('TenantInfos'); 
  }
  public fetchTenantInfos(key: EntityKey<Tenant>, options?: ODataQueryArgumentsOptions<TenantInfo>) {
    return this.fetchNavigationProperty<TenantInfo>(
      this.tenantInfos(key), 
      'entities', options) as Observable<ODataEntities<TenantInfo>>;
  }
  public addTenantInfoToTenantInfos(key: EntityKey<Tenant>, target: ODataEntityResource<ODataEntities<TenantInfo>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.tenantInfos(key).reference()
      .add(target);
  }
  public removeTenantInfoFromTenantInfos(key: EntityKey<Tenant>, {target, etag}: {target?: ODataEntityResource<ODataEntities<TenantInfo>>, etag?: string} = {}): Observable<any> {
    return this.tenantInfos(key).reference()
      .remove(target);
  }
  //#endregion
}
