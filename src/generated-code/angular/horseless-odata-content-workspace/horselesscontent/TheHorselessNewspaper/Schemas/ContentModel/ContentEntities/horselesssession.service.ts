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
//#endregion

@Injectable()
export class HorselessSessionService extends ODataEntitySetService<HorselessSession> {
  constructor(client: ODataClient) {
    super(client, 'HorselessSession', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessSession');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<HorselessSession>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<HorselessSession>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<HorselessSession>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<HorselessSession>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public horselessSessionPrincipal(key: EntityKey<HorselessSession>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('HorselessSessionPrincipal'); 
  }
  public fetchHorselessSessionPrincipal(key: EntityKey<HorselessSession>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.horselessSessionPrincipal(key), 
      'entity', options) as Observable<ODataEntity<Principal>>;
  }
  public setPrincipalAsHorselessSessionPrincipal(key: EntityKey<HorselessSession>, target: ODataEntityResource<ODataEntity<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.horselessSessionPrincipal(key).reference()
      .set(target, {etag});
  }
  public unsetPrincipalAsHorselessSessionPrincipal(key: EntityKey<HorselessSession>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Principal>>, etag?: string} = {}): Observable<any> {
    return this.horselessSessionPrincipal(key).reference()
      .unset({etag});
  }
  public owners(key: EntityKey<HorselessSession>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<HorselessSession>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<HorselessSession>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<HorselessSession>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  //#endregion
}
