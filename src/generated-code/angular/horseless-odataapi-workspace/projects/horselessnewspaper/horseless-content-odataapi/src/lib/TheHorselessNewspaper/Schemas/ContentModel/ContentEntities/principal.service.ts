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
import { HorselessSession } from './horselesssession.entity';
import { Principal } from './principal.entity';
import { Tenant } from './tenant.entity';
import { PrincipalClaimContainer } from './principalclaimcontainer.entity';
//#endregion

@Injectable()
export class PrincipalService extends ODataEntitySetService<Principal> {
  constructor(client: ODataClient) {
    super(client, 'Principal', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<Principal>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<Principal>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<Principal>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<Principal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public horselessSessions(key: EntityKey<Principal>): ODataNavigationPropertyResource<HorselessSession> { 
    return this.entity(key).navigationProperty<HorselessSession>('HorselessSessions'); 
  }
  public fetchHorselessSessions(key: EntityKey<Principal>, options?: ODataQueryArgumentsOptions<HorselessSession>) {
    return this.fetchNavigationProperty<HorselessSession>(
      this.horselessSessions(key), 
      'entities', options) as Observable<ODataEntities<HorselessSession>>;
  }
  public addHorselessSessionToHorselessSessions(key: EntityKey<Principal>, target: ODataEntityResource<ODataEntities<HorselessSession>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.horselessSessions(key).reference()
      .add(target);
  }
  public removeHorselessSessionFromHorselessSessions(key: EntityKey<Principal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<HorselessSession>>, etag?: string} = {}): Observable<any> {
    return this.horselessSessions(key).reference()
      .remove(target);
  }
  public ownedAccessControlEntries(key: EntityKey<Principal>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('OwnedAccessControlEntries'); 
  }
  public fetchOwnedAccessControlEntries(key: EntityKey<Principal>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.ownedAccessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToOwnedAccessControlEntries(key: EntityKey<Principal>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.ownedAccessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromOwnedAccessControlEntries(key: EntityKey<Principal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.ownedAccessControlEntries(key).reference()
      .remove(target);
  }
  public ownedHorselessSessions(key: EntityKey<Principal>): ODataNavigationPropertyResource<HorselessSession> { 
    return this.entity(key).navigationProperty<HorselessSession>('OwnedHorselessSessions'); 
  }
  public fetchOwnedHorselessSessions(key: EntityKey<Principal>, options?: ODataQueryArgumentsOptions<HorselessSession>) {
    return this.fetchNavigationProperty<HorselessSession>(
      this.ownedHorselessSessions(key), 
      'entities', options) as Observable<ODataEntities<HorselessSession>>;
  }
  public addHorselessSessionToOwnedHorselessSessions(key: EntityKey<Principal>, target: ODataEntityResource<ODataEntities<HorselessSession>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.ownedHorselessSessions(key).reference()
      .add(target);
  }
  public removeHorselessSessionFromOwnedHorselessSessions(key: EntityKey<Principal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<HorselessSession>>, etag?: string} = {}): Observable<any> {
    return this.ownedHorselessSessions(key).reference()
      .remove(target);
  }
  public ownedPrincipals(key: EntityKey<Principal>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('OwnedPrincipals'); 
  }
  public fetchOwnedPrincipals(key: EntityKey<Principal>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.ownedPrincipals(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwnedPrincipals(key: EntityKey<Principal>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.ownedPrincipals(key).reference()
      .add(target);
  }
  public removePrincipalFromOwnedPrincipals(key: EntityKey<Principal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.ownedPrincipals(key).reference()
      .remove(target);
  }
  public ownedTenants(key: EntityKey<Principal>): ODataNavigationPropertyResource<Tenant> { 
    return this.entity(key).navigationProperty<Tenant>('OwnedTenants'); 
  }
  public fetchOwnedTenants(key: EntityKey<Principal>, options?: ODataQueryArgumentsOptions<Tenant>) {
    return this.fetchNavigationProperty<Tenant>(
      this.ownedTenants(key), 
      'entities', options) as Observable<ODataEntities<Tenant>>;
  }
  public addTenantToOwnedTenants(key: EntityKey<Principal>, target: ODataEntityResource<ODataEntities<Tenant>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.ownedTenants(key).reference()
      .add(target);
  }
  public removeTenantFromOwnedTenants(key: EntityKey<Principal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Tenant>>, etag?: string} = {}): Observable<any> {
    return this.ownedTenants(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<Principal>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<Principal>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<Principal>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<Principal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public principalClaimContainer(key: EntityKey<Principal>): ODataNavigationPropertyResource<PrincipalClaimContainer> { 
    return this.entity(key).navigationProperty<PrincipalClaimContainer>('PrincipalClaimContainer'); 
  }
  public fetchPrincipalClaimContainer(key: EntityKey<Principal>, options?: ODataQueryArgumentsOptions<PrincipalClaimContainer>) {
    return this.fetchNavigationProperty<PrincipalClaimContainer>(
      this.principalClaimContainer(key), 
      'entity', options) as Observable<ODataEntity<PrincipalClaimContainer>>;
  }
  public setPrincipalClaimContainerAsPrincipalClaimContainer(key: EntityKey<Principal>, target: ODataEntityResource<ODataEntity<PrincipalClaimContainer>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.principalClaimContainer(key).reference()
      .set(target, {etag});
  }
  public unsetPrincipalClaimContainerAsPrincipalClaimContainer(key: EntityKey<Principal>, {target, etag}: {target?: ODataEntityResource<ODataEntity<PrincipalClaimContainer>>, etag?: string} = {}): Observable<any> {
    return this.principalClaimContainer(key).reference()
      .unset({etag});
  }
  public tenantAccounts(key: EntityKey<Principal>): ODataNavigationPropertyResource<Tenant> { 
    return this.entity(key).navigationProperty<Tenant>('TenantAccounts'); 
  }
  public fetchTenantAccounts(key: EntityKey<Principal>, options?: ODataQueryArgumentsOptions<Tenant>) {
    return this.fetchNavigationProperty<Tenant>(
      this.tenantAccounts(key), 
      'entities', options) as Observable<ODataEntities<Tenant>>;
  }
  public addTenantToTenantAccounts(key: EntityKey<Principal>, target: ODataEntityResource<ODataEntities<Tenant>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.tenantAccounts(key).reference()
      .add(target);
  }
  public removeTenantFromTenantAccounts(key: EntityKey<Principal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Tenant>>, etag?: string} = {}): Observable<any> {
    return this.tenantAccounts(key).reference()
      .remove(target);
  }
  //#endregion
}
