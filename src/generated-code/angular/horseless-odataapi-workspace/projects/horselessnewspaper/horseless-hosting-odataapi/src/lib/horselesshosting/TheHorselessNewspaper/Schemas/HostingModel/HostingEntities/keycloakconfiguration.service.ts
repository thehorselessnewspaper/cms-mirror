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
import { AccessControlEntry } from './accesscontrolentry.entity';
import { KeyCloakConfiguration } from './keycloakconfiguration.entity';
import { Principal } from './principal.entity';
import { TenantInfo } from './tenantinfo.entity';
//#endregion

@Injectable()
export class KeyCloakConfigurationService extends ODataEntitySetService<KeyCloakConfiguration> {
  constructor(client: ODataClient) {
    super(client, 'KeyCloakConfiguration', 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.KeyCloakConfiguration');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<KeyCloakConfiguration>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<KeyCloakConfiguration>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<KeyCloakConfiguration>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<KeyCloakConfiguration>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<KeyCloakConfiguration>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<KeyCloakConfiguration>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<KeyCloakConfiguration>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<KeyCloakConfiguration>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public tenantInfo(key: EntityKey<KeyCloakConfiguration>): ODataNavigationPropertyResource<TenantInfo> { 
    return this.entity(key).navigationProperty<TenantInfo>('TenantInfo'); 
  }
  public fetchTenantInfo(key: EntityKey<KeyCloakConfiguration>, options?: ODataQueryArgumentsOptions<TenantInfo>) {
    return this.fetchNavigationProperty<TenantInfo>(
      this.tenantInfo(key), 
      'entity', options) as Observable<ODataEntity<TenantInfo>>;
  }
  public setTenantInfoAsTenantInfo(key: EntityKey<KeyCloakConfiguration>, target: ODataEntityResource<ODataEntity<TenantInfo>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.tenantInfo(key).reference()
      .set(target, {etag});
  }
  public unsetTenantInfoAsTenantInfo(key: EntityKey<KeyCloakConfiguration>, {target, etag}: {target?: ODataEntityResource<ODataEntity<TenantInfo>>, etag?: string} = {}): Observable<any> {
    return this.tenantInfo(key).reference()
      .unset({etag});
  }
  //#endregion
}
