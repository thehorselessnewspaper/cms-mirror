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
import { IdentitySet } from './identityset.complex';
import { SharepointIds } from './sharepointids.complex';
import { SystemFacet } from './systemfacet.complex';
import { Quota } from './quota.complex';
import { User } from './user.entity';
import { Drive } from './drive.entity';
import { DriveItem } from './driveitem.entity';
//#endregion

@Injectable()
export class DrivesService extends ODataEntitySetService<Drive> {
  constructor(client: ODataClient) {
    super(client, 'drives', 'microsoft.graph.drive');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  public recent(key: EntityKey<Drive>): ODataFunctionResource<null, DriveItem> { 
    return this.entity(key).function<null, DriveItem>('microsoft.graph.recent');
  }
  public callRecent(key: EntityKey<Drive>, options?: ODataQueryArgumentsOptions<DriveItem>) {
    return this.callFunction<null, DriveItem>(
      null, 
      this.recent(key), 
      'entities', options) as Observable<ODataEntities<DriveItem>>;
  }
  public search(key: EntityKey<Drive>): ODataFunctionResource<{q: string}, DriveItem> { 
    return this.entity(key).function<{q: string}, DriveItem>('microsoft.graph.search');
  }
  public callSearch(key: EntityKey<Drive>, q: string, options?: ODataQueryArgumentsOptions<DriveItem>) {
    return this.callFunction<{q: string}, DriveItem>(
      {q}, 
      this.search(key), 
      'entities', options) as Observable<ODataEntities<DriveItem>>;
  }
  public sharedWithMe(key: EntityKey<Drive>): ODataFunctionResource<null, DriveItem> { 
    return this.entity(key).function<null, DriveItem>('microsoft.graph.sharedWithMe');
  }
  public callSharedWithMe(key: EntityKey<Drive>, options?: ODataQueryArgumentsOptions<DriveItem>) {
    return this.callFunction<null, DriveItem>(
      null, 
      this.sharedWithMe(key), 
      'entities', options) as Observable<ODataEntities<DriveItem>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  public createdByUser(key: EntityKey<Drive>): ODataNavigationPropertyResource<User> { 
    return this.entity(key).navigationProperty<User>('createdByUser'); 
  }
  public fetchCreatedByUser(key: EntityKey<Drive>, options?: ODataQueryArgumentsOptions<User>) {
    return this.fetchNavigationProperty<User>(
      this.createdByUser(key), 
      'entity', options) as Observable<ODataEntity<User>>;
  }
  public setUserAsCreatedByUser(key: EntityKey<Drive>, target: ODataEntityResource<ODataEntity<User>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.createdByUser(key).reference()
      .set(target, {etag});
  }
  public unsetUserAsCreatedByUser(key: EntityKey<Drive>, {target, etag}: {target?: ODataEntityResource<ODataEntity<User>>, etag?: string} = {}): Observable<any> {
    return this.createdByUser(key).reference()
      .unset({etag});
  }
  public lastModifiedByUser(key: EntityKey<Drive>): ODataNavigationPropertyResource<User> { 
    return this.entity(key).navigationProperty<User>('lastModifiedByUser'); 
  }
  public fetchLastModifiedByUser(key: EntityKey<Drive>, options?: ODataQueryArgumentsOptions<User>) {
    return this.fetchNavigationProperty<User>(
      this.lastModifiedByUser(key), 
      'entity', options) as Observable<ODataEntity<User>>;
  }
  public setUserAsLastModifiedByUser(key: EntityKey<Drive>, target: ODataEntityResource<ODataEntity<User>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.lastModifiedByUser(key).reference()
      .set(target, {etag});
  }
  public unsetUserAsLastModifiedByUser(key: EntityKey<Drive>, {target, etag}: {target?: ODataEntityResource<ODataEntity<User>>, etag?: string} = {}): Observable<any> {
    return this.lastModifiedByUser(key).reference()
      .unset({etag});
  }
  //#endregion
}
