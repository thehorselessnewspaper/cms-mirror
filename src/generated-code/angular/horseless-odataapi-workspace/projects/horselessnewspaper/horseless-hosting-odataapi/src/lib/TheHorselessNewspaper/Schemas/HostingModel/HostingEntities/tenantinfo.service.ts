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
import { KeyCloakConfiguration } from './keycloakconfiguration.entity';
import { Tenant } from './tenant.entity';
import { TenantInfo } from './tenantinfo.entity';
import { WebAPITenantInfo } from './webapitenantinfo.entity';
//#endregion

@Injectable()
export class TenantInfoService extends ODataEntitySetService<TenantInfo> {
  constructor(client: ODataClient) {
    super(client, 'TenantInfo', 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantInfo');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<TenantInfo>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<TenantInfo>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<TenantInfo>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<TenantInfo>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public keyCloakConfigurations(key: EntityKey<TenantInfo>): ODataNavigationPropertyResource<KeyCloakConfiguration> { 
    return this.entity(key).navigationProperty<KeyCloakConfiguration>('KeyCloakConfigurations'); 
  }
  public fetchKeyCloakConfigurations(key: EntityKey<TenantInfo>, options?: ODataQueryArgumentsOptions<KeyCloakConfiguration>) {
    return this.fetchNavigationProperty<KeyCloakConfiguration>(
      this.keyCloakConfigurations(key), 
      'entities', options) as Observable<ODataEntities<KeyCloakConfiguration>>;
  }
  public addKeyCloakConfigurationToKeyCloakConfigurations(key: EntityKey<TenantInfo>, target: ODataEntityResource<ODataEntities<KeyCloakConfiguration>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.keyCloakConfigurations(key).reference()
      .add(target);
  }
  public removeKeyCloakConfigurationFromKeyCloakConfigurations(key: EntityKey<TenantInfo>, {target, etag}: {target?: ODataEntityResource<ODataEntities<KeyCloakConfiguration>>, etag?: string} = {}): Observable<any> {
    return this.keyCloakConfigurations(key).reference()
      .remove(target);
  }
  public parentTenant(key: EntityKey<TenantInfo>): ODataNavigationPropertyResource<Tenant> { 
    return this.entity(key).navigationProperty<Tenant>('ParentTenant'); 
  }
  public fetchParentTenant(key: EntityKey<TenantInfo>, options?: ODataQueryArgumentsOptions<Tenant>) {
    return this.fetchNavigationProperty<Tenant>(
      this.parentTenant(key), 
      'entity', options) as Observable<ODataEntity<Tenant>>;
  }
  public setTenantAsParentTenant(key: EntityKey<TenantInfo>, target: ODataEntityResource<ODataEntity<Tenant>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.parentTenant(key).reference()
      .set(target, {etag});
  }
  public unsetTenantAsParentTenant(key: EntityKey<TenantInfo>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Tenant>>, etag?: string} = {}): Observable<any> {
    return this.parentTenant(key).reference()
      .unset({etag});
  }
  public webAPITenantInfos(key: EntityKey<TenantInfo>): ODataNavigationPropertyResource<WebAPITenantInfo> { 
    return this.entity(key).navigationProperty<WebAPITenantInfo>('WebAPITenantInfos'); 
  }
  public fetchWebAPITenantInfos(key: EntityKey<TenantInfo>, options?: ODataQueryArgumentsOptions<WebAPITenantInfo>) {
    return this.fetchNavigationProperty<WebAPITenantInfo>(
      this.webAPITenantInfos(key), 
      'entities', options) as Observable<ODataEntities<WebAPITenantInfo>>;
  }
  public addWebAPITenantInfoToWebAPITenantInfos(key: EntityKey<TenantInfo>, target: ODataEntityResource<ODataEntities<WebAPITenantInfo>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.webAPITenantInfos(key).reference()
      .add(target);
  }
  public removeWebAPITenantInfoFromWebAPITenantInfos(key: EntityKey<TenantInfo>, {target, etag}: {target?: ODataEntityResource<ODataEntities<WebAPITenantInfo>>, etag?: string} = {}): Observable<any> {
    return this.webAPITenantInfos(key).reference()
      .remove(target);
  }
  //#endregion
}
