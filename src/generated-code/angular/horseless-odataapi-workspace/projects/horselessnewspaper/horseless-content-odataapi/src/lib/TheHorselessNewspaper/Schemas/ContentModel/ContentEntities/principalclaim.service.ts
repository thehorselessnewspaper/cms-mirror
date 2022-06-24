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
import { PrincipalClaim } from './principalclaim.entity';
import { PrincipalClaimContainer } from './principalclaimcontainer.entity';
//#endregion

@Injectable()
export class PrincipalClaimService extends ODataEntitySetService<PrincipalClaim> {
  constructor(client: ODataClient) {
    super(client, 'PrincipalClaim', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.PrincipalClaim');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<PrincipalClaim>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<PrincipalClaim>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<PrincipalClaim>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<PrincipalClaim>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<PrincipalClaim>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<PrincipalClaim>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<PrincipalClaim>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<PrincipalClaim>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public principalClaimContainer(key: EntityKey<PrincipalClaim>): ODataNavigationPropertyResource<PrincipalClaimContainer> { 
    return this.entity(key).navigationProperty<PrincipalClaimContainer>('PrincipalClaimContainer'); 
  }
  public fetchPrincipalClaimContainer(key: EntityKey<PrincipalClaim>, options?: ODataQueryArgumentsOptions<PrincipalClaimContainer>) {
    return this.fetchNavigationProperty<PrincipalClaimContainer>(
      this.principalClaimContainer(key), 
      'entity', options) as Observable<ODataEntity<PrincipalClaimContainer>>;
  }
  public setPrincipalClaimContainerAsPrincipalClaimContainer(key: EntityKey<PrincipalClaim>, target: ODataEntityResource<ODataEntity<PrincipalClaimContainer>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.principalClaimContainer(key).reference()
      .set(target, {etag});
  }
  public unsetPrincipalClaimContainerAsPrincipalClaimContainer(key: EntityKey<PrincipalClaim>, {target, etag}: {target?: ODataEntityResource<ODataEntity<PrincipalClaimContainer>>, etag?: string} = {}): Observable<any> {
    return this.principalClaimContainer(key).reference()
      .unset({etag});
  }
  //#endregion
}
