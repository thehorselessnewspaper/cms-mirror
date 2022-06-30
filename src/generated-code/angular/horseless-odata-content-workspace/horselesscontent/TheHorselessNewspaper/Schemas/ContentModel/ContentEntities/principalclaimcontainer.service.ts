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
import { Principal } from './principal.entity';
import { PrincipalClaim } from './principalclaim.entity';
import { PrincipalClaimContainer } from './principalclaimcontainer.entity';
//#endregion

@Injectable()
export class PrincipalClaimContainerService extends ODataEntitySetService<PrincipalClaimContainer> {
  constructor(client: ODataClient) {
    super(client, 'PrincipalClaimContainer', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.PrincipalClaimContainer');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<PrincipalClaimContainer>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<PrincipalClaimContainer>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<PrincipalClaimContainer>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<PrincipalClaimContainer>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<PrincipalClaimContainer>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<PrincipalClaimContainer>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<PrincipalClaimContainer>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<PrincipalClaimContainer>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public principal(key: EntityKey<PrincipalClaimContainer>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Principal'); 
  }
  public fetchPrincipal(key: EntityKey<PrincipalClaimContainer>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.principal(key), 
      'entity', options) as Observable<ODataEntity<Principal>>;
  }
  public setPrincipalAsPrincipal(key: EntityKey<PrincipalClaimContainer>, target: ODataEntityResource<ODataEntity<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.principal(key).reference()
      .set(target, {etag});
  }
  public unsetPrincipalAsPrincipal(key: EntityKey<PrincipalClaimContainer>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Principal>>, etag?: string} = {}): Observable<any> {
    return this.principal(key).reference()
      .unset({etag});
  }
  public principalClaim(key: EntityKey<PrincipalClaimContainer>): ODataNavigationPropertyResource<PrincipalClaim> { 
    return this.entity(key).navigationProperty<PrincipalClaim>('PrincipalClaim'); 
  }
  public fetchPrincipalClaim(key: EntityKey<PrincipalClaimContainer>, options?: ODataQueryArgumentsOptions<PrincipalClaim>) {
    return this.fetchNavigationProperty<PrincipalClaim>(
      this.principalClaim(key), 
      'entities', options) as Observable<ODataEntities<PrincipalClaim>>;
  }
  public addPrincipalClaimToPrincipalClaim(key: EntityKey<PrincipalClaimContainer>, target: ODataEntityResource<ODataEntities<PrincipalClaim>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.principalClaim(key).reference()
      .add(target);
  }
  public removePrincipalClaimFromPrincipalClaim(key: EntityKey<PrincipalClaimContainer>, {target, etag}: {target?: ODataEntityResource<ODataEntities<PrincipalClaim>>, etag?: string} = {}): Observable<any> {
    return this.principalClaim(key).reference()
      .remove(target);
  }
  //#endregion
}
